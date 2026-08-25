import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Toast from "@/components/ui/Toast";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  weight: ["300", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "House of Neeya",
  description:
    "For the fashion-forward Nigerian who refuses to choose between looking exceptional and spending wisely — House of Neeya is the curated fashion destination that brings trend-driven footwear, clothing, and handbags directly to your door, selected by a trusted eye you can call by name.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", cormorantGaramond.variable, dmSans.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden">
        <Toast />
        {children}
      </body>
    </html>
  );
}
