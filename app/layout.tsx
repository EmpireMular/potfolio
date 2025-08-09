import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/footer"

const font = Poppins(
  { subsets: ["latin"], 
    weight: '400'
  }
);

export const metadata: Metadata = {
  title: "ApexCode Agency",
  description: "Ignite Your Next Big Idea",
  icons: {
  icon: "/logo.svg",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
