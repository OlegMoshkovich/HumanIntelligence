import { Resend } from "resend";

const recipient = "anna@aristovadesign.com";

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Enter your name and email." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!name || name.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter your name and email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Registration is not available yet." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send(
    {
      from: "Human x Intelligence <hello@mail.human-x-intelligence.com>",
      to: [recipient],
      replyTo: email,
      subject: `Register your interest — ${name}`,
      template: {
        id: "register-interest",
        variables: {
          VISITOR_NAME: name,
          VISITOR_EMAIL: email,
        },
      },
    },
    { idempotencyKey: `register-interest/${email.toLowerCase()}` },
  );

  if (error) {
    console.error("Failed to send interest email:", error.message);
    return Response.json({ error: "Could not send your interest. Please try again." }, { status: 502 });
  }

  console.log("Sent interest email:", data?.id);
  return Response.json({ id: data?.id });
}
