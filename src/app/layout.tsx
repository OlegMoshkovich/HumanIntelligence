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

const siteUrl = "https://www.human-x-intelligence.com";
const previewImage = {
  url: "/og.png",
  width: 1200,
  height: 1200,
  alt: "Human x Intelligence",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Human x Intelligence",
    template: "%s",
  },
  description: `${socialTitle} ${socialDescription}`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    siteName: "Human x Intelligence",
    type: "website",
    url: siteUrl,
    images: [previewImage],
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: socialDescription,
    images: [previewImage.url],
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
