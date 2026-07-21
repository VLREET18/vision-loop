import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "VISION LOOP | Social Media Management Agency",
  description:
    "VISION LOOP helps brands grow through creative social media management, branding, content creation, and digital marketing.",
  keywords: [
    "Social Media Management",
    "Digital Marketing",
    "Branding",
    "Instagram Marketing",
    "Content Creation",
    "VISION LOOP",
  ],
  authors: [{ name: "VISION LOOP" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}