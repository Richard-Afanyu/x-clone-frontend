"use client";

import {
  ArrowUpCircle,
  Bolt,
  Bookmark,
  Briefcase,
  Lightbulb,
  List,
  MonitorCog,
  Settings,
  Verified,
  X,
} from "lucide-react";
import React, { useState } from "react";
import SidebarMoreRow from "./SidebarMoreRow";

interface Props {
  open: () => void;
}

function SidebarMore({ open }: Props) {
  return (
    <div>
      <div className="bg-black absolute bottom-[-30px] left-0 shadow-md  w-full text-sm lg:text-md z-20 shadow-white   rounded-2xl ">
        <div className="relative flex-col gap-4 flex py-2 px-2">
          <div className="text-right absolute right-2 top-2">
            <button onClick={open}>
              <X />
            </button>
          </div>
          <SidebarMoreRow title="Lists" link="/lists" Icon={List} />
          <SidebarMoreRow title="Premium" link="/premium" Icon={Verified} />
          <SidebarMoreRow title="Bookmarks" link="/bookmarks" Icon={Bookmark} />
          <SidebarMoreRow
            title="Monitization"
            link="/monitization"
            Icon={MonitorCog}
          />
          <SidebarMoreRow
            title="Verified Orgs"
            link="/verified-orgs"
            Icon={Bolt}
          />
          <SidebarMoreRow title="Ads" link="/ads" Icon={ArrowUpCircle} />
          <SidebarMoreRow title="Jobs" link="/jobs" Icon={Briefcase} />
          <SidebarMoreRow
            title="Create your Space"
            link="/your-space"
            Icon={Lightbulb}
          />
          <SidebarMoreRow
            title="Settings and privacy"
            link="/settings-and-privacy"
            Icon={Settings}
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarMore;
