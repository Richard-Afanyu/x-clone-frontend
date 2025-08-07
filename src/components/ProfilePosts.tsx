"use client";

import React, { useState } from "react";
import Post from "./Post";
import { PostsData } from "@/app/data";
import { PostType } from "../../types";
import { useProfileSelectStore } from "@/contexts/ProfileSelectStore";

function Posts() {
  const current = useProfileSelectStore((state) => state.current);

  let displayInfo;
  if (current == "posts") {
    displayInfo = "posts info";
  } else if (current == "replies") {
    displayInfo = "replies";
  } else if (current == "highlights") {
    displayInfo = "highlights";
  } else if (current == "articles") {
    displayInfo = "articles";
  } else if (current == "media") {
    displayInfo = "media";
  } else {
    displayInfo = "likes";
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">{displayInfo}</div>
    </div>
  );
}

export default Posts;
