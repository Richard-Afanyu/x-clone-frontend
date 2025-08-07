"use client";

import { useState } from "react";

function ShowMorePosts() {
  const [showmore, setShowmore] = useState<boolean>(false);

  const handleShowmore = () => {
    setShowmore((prev) => (prev = !prev));
  };

  return (
    <div className="border-b border-white/30 flex items-center justify-center py-2">
      <button onClick={handleShowmore} className="text-twitter buttonStyleBig">
        {showmore ? "Hide 35 posts" : "Show 35 posts"}
      </button>
    </div>
  );
}

export default ShowMorePosts;
