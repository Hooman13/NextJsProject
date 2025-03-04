import { ReactElement } from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo/logo.png";

export default function HeaderComponent(): ReactElement {
  return (
    <header className="flex justify-evenly p-6 items-center gap-36">
      <nav className="flex justify-center">
        <div className="text-white pl-3  hover:text-green-300">
          <Link href="/">خانه</Link>
        </div>
        <div className="text-white pl-3">
          <Link href="/search">جستجو</Link>
        </div>
      </nav>
      <button className="bg-transparent text-green-300 border border-green-300 rounded-2xl cursor-pointer font-semibold px-3 py-2 hover:bg-green-300 hover:text-black">
        ورود | ثبت نام
      </button>
    </header>
  );
}
