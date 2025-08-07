"use client";

import {
  Bell,
  Mail,
  HomeIcon,
  Search,
  X,
  RefreshCcw,
  Users2,
  User,
  MoreHorizontal,
} from "lucide-react";
import React, { useState } from "react";
import SidebarRow from "./SidebarRow";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import Image from "next/image";
import SidebarMore from "./SidebarMore";

function Sidebar() {
  const [showmore, setShowmore] = useState<boolean>(false);

  const handleShowmore = () => {
    setShowmore((prev) => (prev = !prev));
  };

  return (
    <div className="relative h-[100vh] overflow-scroll max-h-[100vh] w-full lg:text-xl pr-3">
      <div>
        <X size={35} />
      </div>
      {/* sidebar links */}
      <div className="mt-3">
        <div className="flex flex-col gap-6">
          <SidebarRow title="Home" link="/" Icon={HomeIcon} newStuff={true} />
          <SidebarRow
            title="Explore"
            link="/explore"
            Icon={Search}
            newStuff={false}
            value={0}
          />
          <SidebarRow
            title="Notifications"
            link="/notifications"
            Icon={Bell}
            newStuff={true}
            value={2}
          />
          <SidebarRow
            title="Messages"
            link="/messages"
            Icon={Mail}
            newStuff={false}
            value={2}
          />
          <SidebarRow
            title="Grok"
            link="/grok"
            Icon={RefreshCcw}
            newStuff={false}
            value={0}
          />
          <SidebarRow
            title="Communities"
            link="/communities"
            Icon={Users2}
            newStuff={false}
            value={0}
          />
          <SidebarRow
            title="Profile"
            link="/profile"
            Icon={User}
            newStuff={false}
            value={0}
          />
          <div className="relative">
            <button
              className="flex gap-3 items-center"
              onClick={handleShowmore}
            >
              <MoreHorizontal />
              <span className="hover:font-bold transition-all ease-out duration-100">
                More
              </span>
            </button>
            {showmore && <SidebarMore open={handleShowmore} />}
          </div>
          <div className="">
            <button className="buttonStyleBig w-[90%] lg:text-xl bg-white text-black font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 w-full pr-3 flex items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-2">
          <div>
            <Image
              src="/assets/friends/friend1.jpg"
              alt="profile image"
              className="rounded-full object-cover"
              width={35}
              height={35}
            />
          </div>
          <div className="flex flex-col">
            <span>Richard Afanyu</span>
            <span className="text-white/30 text-sm">@Afanyu05</span>
          </div>
        </div>
        {/* right */}
        <MoreHorizontal />
      </div>
    </div>
  );
}

export default Sidebar;
