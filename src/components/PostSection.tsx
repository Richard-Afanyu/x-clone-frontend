"use client";

import {
  Calendar,
  ChartBar,
  ImageIcon,
  List,
  LocateIcon,
  RecycleIcon,
  SmileIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function PostSection() {
  const [postContent, setPostContent] = useState<string>("");

  const handlePostContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostContent(e.target.value);
  };
  return (
    <div className="border-b border-white/30">
      <div className="pt-4 px-3 pb-3 flex gap-2 w-full">
        {/* left */}
        <div>
          <Image
            src="/assets/friends/friend1.jpg"
            alt="profile image"
            className="rounded-full object-cover"
            width={35}
            height={35}
          />
        </div>
        {/* right */}
        <div className="flex-1">
          <form>
            <input
              type="text"
              onChange={handlePostContent}
              placeholder="What is happening?!"
              className="outline-none w-full bg-transparent text-sm text-gray-300"
            />
            {/* right bottom */}
            <div className="mt-7 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <ImageIcon size={17} stroke="#00ADED" />
                <ChartBar size={17} stroke="#00ADED" />
                <RecycleIcon size={17} stroke="#00ADED" />
                <List size={17} stroke="#00ADED" />
                <SmileIcon size={17} stroke="#00ADED" />
                <Calendar size={17} stroke="#00ADED" />
                <LocateIcon size={17} stroke="#00ADED" />
              </div>
              <button
                disabled={postContent == "" ? true : false}
                className="bg-white text-black buttonStyle font-semibold disabled:bg-white/40"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostSection;
