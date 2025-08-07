import React from "react";
import ProfileTop from "./ProfileTop";
import ProfileInfo from "./ProfileInfo";
import ProfileSelect from "./ProfileSelect";
import ProfilePosts from "./ProfilePosts";

function Profile() {
  return (
    <div className="pt-2 md:border-r border-white/30 max-h-[100vh] overflow-scroll">
      <ProfileTop />
      <ProfileInfo />
      <ProfileSelect />
      <ProfilePosts />
    </div>
  );
}

export default Profile;
