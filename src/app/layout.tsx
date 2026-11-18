import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const socialTitle = "A global gathering of leading scientists and creatives.";
const socialDescription =
  "Human x Intelligence is an international symposium amongst artists, thinkers, scientists, and technologists, and the public to explore the changing role of the human in an increasingly intelligent world.";

export const metadata: Metadata = {
  title: {
    default: "Human x Intelligence",
    template: "%s",
  },
  description: `${socialTitle} ${socialDescription}`,
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    siteName: "Human x Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: socialDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
