"use client";

import React, { useState } from "react";
import { HappeningData } from "@/app/data";
import { HappeningType } from "../../types";
import HappeningItem from "./HappeningItem";

function Happening() {
  let index: number;
  const [showmore, setShowmore] = useState<boolean>(false);
  const [lessItems, setLessItems] = useState<HappeningType[]>([]);

  const handleShowmore = () => {
    setShowmore((prev) => (prev = !prev));
  };

  let newItems: HappeningType[] = HappeningData.slice(0, 4);

  return (
    <div className="border border-white/30 rounded-2xl mt-6 py-3 px-3">
      <h2 className="font-bold text-xl">What's happening</h2>
      {/* happening items */}
      <div className="mt-4 flex flex-col gap-4">
        {showmore
          ? HappeningData.map((item: HappeningType) => (
              <HappeningItem
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                trending={item.trending}
                posts={item.posts}
              />
            ))
          : newItems.map((item) => (
              <HappeningItem
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                trending={item.trending}
                posts={item.posts}
              />
            ))}
      </div>
      <button onClick={handleShowmore} className="mt-6 text-twitter">
        {showmore ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default Happening;
