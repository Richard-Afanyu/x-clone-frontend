import MainRight from "@/components/MainRight";
import Profile from "@/components/Profile";
import React from "react";

function ProfilePage() {
  return (
    <div className="grid grid-cols-1 lg:grid lg:grid-cols-8">
      <div className="lg:col-span-5">
        <Profile />
      </div>
      <div className="hidden lg:inline-flex lg:col-span-3">
        <MainRight />
      </div>
    </div>
  );
}

export default ProfilePage;
