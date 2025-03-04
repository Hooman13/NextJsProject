import FooterComponent from "@/components/footer/footer.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box";
import HeaderComponent from "@/components/header/header.component";
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
      <body className="bg-black text-white grid grid-rows-[auto_1fr_auto] min-h-screen min-h-[100dvh]">
        <HeaderComponent />
        <main>
          <GlobalSearchBoxComponent />
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
