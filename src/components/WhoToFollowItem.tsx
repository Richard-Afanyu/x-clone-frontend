import React from "react";
import { FollowType, HappeningType } from "../../types";
import { MoreHorizontal } from "lucide-react";
import { WhoToFollowData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

function HappeningItem({ id, title, username, image }: FollowType) {
  let displayTitle = title.length;
  let newTitle;
  let show;
  let userlink = username.slice(1, username.length);

  if (displayTitle > 16) {
    newTitle = title.slice(0, 17);
    show = `${newTitle}...`;
  } else {
    show = `${title}`;
  }

  return (
    <div className="flex justify-between items-center">
      {/* left */}
      <Link href={userlink}>
        <div className="flex gap-1 items-center">
          <div>
            <Image
              src={image}
              alt="profile image"
              width={35}
              height={35}
              className="rounded-full object-cover"
            />
          </div>
          <div className=" flex flex-col">
            <h3 className="text-[12px] font-semibold">{show}</h3>
            <p className="text-white/30 text-[12px]">{username}</p>
          </div>
        </div>
      </Link>
      {/* right */}
      <button className="buttonStyleBig font-semibold text-black bg-white">
        Follow
      </button>
    </div>
  );
}

export default HappeningItem;
