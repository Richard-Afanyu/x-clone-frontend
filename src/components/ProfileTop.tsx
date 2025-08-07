"use client";

import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function ProfileTop() {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center gap-6 ml-3">
        <button onClick={router.back}>
          <ArrowLeftCircle />
        </button>
        <div>
          <h2 className="font-bold">Richard Afanyu</h2>
          <span className="text-white/30 text-sm">25 posts</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileTop;
