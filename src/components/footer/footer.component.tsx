import autoprefixer from "autoprefixer";
import Link from "next/link";
import { ReactElement } from "react";

import MingcuteYoutubeFill from "../icon/MingcuteYoutubeFill";

export default function FooterComponent(): ReactElement {
  return (
    <footer className="bg-slate-800 p-6">
      <div className="flex justify-evenly items-center pb-10">
        <div className="writings">
          <div className="text-3xl">دکتر کو؟</div>
          <p>تجربه پیدا کردن دکتر در این پلتفرم </p>
        </div>
        <div>
          <div className="visuals"></div>
          <div className="flex text-5xl">
            <Link href="https://t.me/Hmntrb">
              <MingcuteYoutubeFill />
            </Link>
            <Link href="https://t.me/Hmntrb">
              <MingcuteYoutubeFill />
            </Link>
            <Link href="https://t.me/Hmntrb">
              <MingcuteYoutubeFill />
            </Link>
          </div>
        </div>
      </div>
      <p className="copyright flex justify-center">
        تمامی حقوق سایت مربوط به این جانب هومن ترابی می باشد لطفا دقت کنید
      </p>
    </footer>
  );
}
