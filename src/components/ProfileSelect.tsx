"use client";

import { useProfileSelectStore } from "@/contexts/ProfileSelectStore";
import React from "react";

function ProfileSelect() {
  const current = useProfileSelectStore((state) => state.current);
  const setCurrent = useProfileSelectStore((state) => state.setCurrent);
  return (
    <div className="mt-6 border-b border-white/30 flex justify-between px-3  text-white/30">
      <button
        onClick={() => setCurrent("posts")}
        className={
          current == "posts"
            ? "text-white border-b-2 border-twitter pb-2"
            : "pb-2"
        }
      >
        Posts
      </button>
      <button
        onClick={() => setCurrent("replies")}
        className={
          current == "replies"
            ? "text-white border-b-2 border-twitter pb-2"
            : "pb-2"
        }
      >
        Replies
      </button>
      <button
        onClick={() => setCurrent("highlights")}
        className={
          current == "highlights"
            ? "text-white border-b-2 border-twitter pb-2"
            : "pb-2"
        }
      >
        Highlights
      </button>
      <button
        onClick={() => setCurrent("articles")}
        className={
          current == "articles"
            ? "text-white border-b-2 border-twitter pb-2"
            : "pb-2"
        }
      >
        Articles
      </button>
      <button
        onClick={() => setCurrent("media")}
        className={
          current == "media"
            ? "text-white border-b-2 border-twitter pb-2"
            : "pb-2"
        }
      >
        Media
      </button>
      <button
        onClick={() => setCurrent("likes")}
        className={
          current == "likes"
            ? "text-white border-b-2 border-twitter pb-2"
            : "pb-2"
        }
      >
        Likes
      </button>
    </div>
  );
}

export default ProfileSelect;
