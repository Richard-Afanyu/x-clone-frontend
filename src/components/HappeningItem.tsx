import React from "react";
import { HappeningType } from "../../types";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

function HappeningItem({
  id,
  title,
  posts,
  category,
  trending,
}: HappeningType) {
  let postValue: number = 0;
  let write = "";
  let userlink = title.replace(" ", "-");
  userlink = userlink.toLowerCase();

  if (posts > 10000) {
    postValue = posts / 1000;
    write = `${postValue}k posts`;
  } else {
    postValue = posts;
    write = `${postValue} posts`;
  }

  return (
    <div className="flex justify-between items-center">
      <Link href={userlink}>
        <div>
          <div className="text-white/30 text-[12px] flex gap-1">
            <span>{category}</span>
            <span>.</span>
            {trending && <span>Trending</span>}
          </div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-white/30 text-[12px]">{write}</p>
        </div>
      </Link>
      <button>
        <MoreHorizontal />
      </button>
    </div>
  );
}

export default HappeningItem;
