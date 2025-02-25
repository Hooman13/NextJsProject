import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn: NextFont = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "جستجوی دکتر",
  description: "دلتفرم جامع دکتر یاب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
