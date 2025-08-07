"use client";

import { useForYouStore } from "@/contexts/ForYouStore";
import React from "react";

function MainLeftTop() {
  const current = useForYouStore((state) => state.current);
  const setCurrent = useForYouStore((state) => state.setCurrent);
  return (
    <div className="flex justify-around border-b border-white/30">
      <button
        onClick={() => setCurrent("for-you")}
        className={
          current == "for-you" ? "border-b-4 pb-2 border-b-twitter" : ""
        }
      >
        For you
      </button>
      <button
        onClick={() => setCurrent("following")}
        className={
          current == "following" ? "border-b-4 pb-2 border-b-twitter" : ""
        }
      >
        Following
      </button>
    </div>
  );
}

export default MainLeftTop;
