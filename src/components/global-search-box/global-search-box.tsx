import { ReactElement } from "react";

import MingcuteLocationFill from "../icon/MingcuteLocationFill";
import MingcuteSearchLine from "../icon/MingcuteSearchLine";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className="global-search-box flex items-center justify-center gap-3 border-white rounded-full">
      <div className="prefix grid items-center text-lg">
        <MingcuteSearchLine />
      </div>
      <input
        type="text"
        placeholder="نام بیماری٬ تخصص٬ پزشک٬ بیمارستان و ..."
        className="flex bg-transparent p-3"
      />
      <div className="divider"></div>
      <div>
        <button className="flex gap-1">
          <MingcuteLocationFill />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
