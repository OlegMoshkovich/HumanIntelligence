"use client";

import { useEffect, useId, useState } from "react";

export function RegisterInterestButton({
  className,
  children,
  session,
}: {
  className?: string;
  children: React.ReactNode;
  session?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open ? <RegisterDialog session={session} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function RegisterDialog({
  onClose,
  session,
}: {
  onClose: () => void;
  session?: string;
}) {
  const titleId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, session }),
    });
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    if (!response.ok) {
      setStatus("error");
      setMessage(payload?.error ?? "Something went wrong. Please try again.");
      return;
    }
    setStatus("sent");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-[420px] bg-background px-6 py-7 text-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-[24px] leading-[30px] font-bold tracking-[-0.72px]">
            Register your interest
          </h2>
          <button
            type="button"
            className="flex h-[18px] w-7 shrink-0 items-center justify-center"
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <line x1="2" y1="2" x2="16" y2="16" stroke="black" strokeWidth="2" />
              <line x1="16" y1="2" x2="2" y2="16" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        </div>
        {session ? (
          <p className="mt-4 text-[16px] leading-[26px]">
            <span className="font-medium">Session</span>
            <br />
            {session}
          </p>
        ) : null}
        {status === "sent" ? (
          <p className="mt-6 text-[16px] leading-[26px]">
            Thank you. Your interest has been sent.
          </p>
        ) : (
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <label className="grid gap-2 text-[14px] font-medium">
              Name
              <input
                name="name"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="h-12 border border-black bg-white px-3 text-[16px] font-normal"
              />
            </label>
            <label className="grid gap-2 text-[14px] font-medium">
              Email address
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 border border-black bg-white px-3 text-[16px] font-normal"
              />
            </label>
            {status === "error" ? (
              <p className="text-[14px] leading-normal text-accent">{message}</p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex h-[46px] items-center justify-center rounded-[20px] bg-black px-7 text-[16px] font-medium text-white disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
