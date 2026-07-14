import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "french toast",
  description: "The Artisan Bakery & Café",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${crimson.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-brand-beige text-brand-text">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
