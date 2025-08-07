"use client";

import { useState } from "react";
import { WhoToFollowData } from "@/app/data";
import { FollowType } from "../../types";
import WhoToFollowItem from "@/components/WhoToFollowItem";

function WhoToFollow() {
  let index: number;
  const [showmore, setShowmore] = useState<boolean>(false);
  const [lessItems, setLessItems] = useState<FollowType[]>([]);

  const handleShowmore = () => {
    setShowmore((prev) => (prev = !prev));
  };

  let newItems: FollowType[] = WhoToFollowData.slice(0, 3);
  return (
    <div className="border border-white/30 rounded-2xl mt-6 py-3 px-3">
      <h2 className="text-xl font-bold mb-3">Who to Follow</h2>
      <div className="flex flex-col gap-6">
        {showmore
          ? WhoToFollowData.map((item: FollowType) => (
              <WhoToFollowItem
                key={item.id}
                id={item.id}
                image={item.image}
                username={item.username}
                title={item.title}
              />
            ))
          : newItems.map((item: FollowType) => (
              <WhoToFollowItem
                key={item.id}
                id={item.id}
                image={item.image}
                username={item.username}
                title={item.title}
              />
            ))}
      </div>
      <button onClick={handleShowmore} className="mt-6 text-twitter">
        {showmore ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default WhoToFollow;
