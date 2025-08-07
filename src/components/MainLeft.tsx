import React from "react";
import MainLeftTop from "./MainLeftTop";
import PostSection from "./PostSection";
import ShowMorePosts from "./ShowMorePosts";
import Posts from "./Posts";

function MainLeft() {
  return (
    <div className="pt-2 md:border-r border-white/30 max-h-[100vh] overflow-scroll">
      {/* top */}
      <div>
        <MainLeftTop />
      </div>
      {/* post section */}
      <div>
        <PostSection />
      </div>
      {/* showmore posts */}
      <div>
        <ShowMorePosts />
      </div>
      {/* single post */}
      <div>
        <Posts />
      </div>
    </div>
  );
}

export default MainLeft;
