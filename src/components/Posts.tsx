"use client";

import React, { useState } from "react";
import Post from "./Post";
import { PostsData } from "@/app/data";
import { PostType } from "../../types";
import { useForYouStore } from "@/contexts/ForYouStore";

function Posts() {
  const current = useForYouStore((state) => state.current);

  const [following, setFollowing] = useState(
    PostsData.filter((item) => item.following == true)
  );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {current == "for-you"
          ? PostsData.map((tweet: PostType) => (
              <Post tweet={tweet} key={tweet.id} />
            ))
          : following.map((tweet: PostType) => (
              <Post tweet={tweet} key={tweet.id} />
            ))}
      </div>
    </div>
  );
}

export default Posts;
