import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import { JsonLdPerson } from "@/components/json-ld";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: `${site.name} — ${site.title}`,
  description: site.tagline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        <JsonLdPerson />
      </head>
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-teal-900 focus:shadow-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-teal-800"
        >
          Skip to main content
        </a>
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}