import { Search } from "lucide-react";
import React from "react";
import Happening from "./Happening";
import Footer from "./Footer";
import WhoToFollow from "./WhoToFollow";

function MainRight() {
  return (
    <div className="pt-2 pl-4 max-h-[100vh] overflow-scroll">
      {/* search section */}
      <form className="flex items-center px-2 py-2 gap-2 border border-white/30 rounded-2xl ">
        <button>
          <Search size={18} />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-sm text-gray-300"
        />
      </form>
      {/* subscribe section */}
      <div className="mt-6 border border-white/30 rounded-2xl py-3 px-3">
        <h2 className="font-bold text-xl mb-2">Subscribe to Premium</h2>
        <p className="text-gray-300 text-sm font-semibold">
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <button className="buttonStyleBig font-semibold mt-2 bg-twitter">
          Subscribe
        </button>
      </div>
      <div>
        <Happening />
      </div>
      {/* whot to follow */}
      <div>
        <WhoToFollow />
      </div>
      {/* footer */}
      <div className="my-6">
        <Footer />
      </div>
    </div>
  );
}

export default MainRight;
