import { Briefcase, Calendar, Verified } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProfileInfo() {
  return (
    <div>
      <div className="mt-1">
        {/* images section */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/assets/posts/post12.jpg"
            alt="banner image"
            fill
            className="object-cover"
          />
        </div>
        {/* profile image section */}
        <div className="flex justify-between px-3">
          <div className="w-[120px] h-[120px] relative mt-[-50px]">
            <Image
              src="/assets/friends/friend1.jpg"
              alt="profile image"
              fill
              className="rounded-full border-4 border-black"
            />
          </div>
          <button className="buttonStyleBig border-2 mt-2 border-white h-fit">
            Edit profile
          </button>
        </div>
        {/* profile content */}
        <div className="px-3 mt-2">
          {/* content top */}
          <div className="flex gap-2">
            <div>
              <h2 className="font-bold">Richard Afanyu</h2>
              <span className="text-white/30 text-sm">@Afanyu05</span>
            </div>
            <div>
              <button className="flex gap-2 px-2 rounded-full border border-white items-center">
                <Verified stroke="#00ADED" size={18} />
                <span>Get verified</span>
              </button>
            </div>
          </div>
          {/* content bottom */}
          <div className="mt-2">
            <div className="flex flex-col">
              <span>Frontend Web Developer</span>
              <span>Email Copywriter</span>
              <span>2nd Year Meteorology Engineering Student</span>
              <span>
                Find me:{" "}
                <span className="text-twitter">richardafanyu5@gmail.com</span>
              </span>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-4 text-white/30 text-sm">
                <div className="flex items-center gap-1">
                  <Briefcase size={18} />
                  <span>Science & Technology</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <span>Joined December 2023</span>
                </div>
              </div>
              <div className="mt-2 flex gap-4">
                <span className="text-white/30">
                  <span className="text-white">17</span>Following
                </span>
                <span className="text-white/30">
                  <span className="text-white">1</span>Follower
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
