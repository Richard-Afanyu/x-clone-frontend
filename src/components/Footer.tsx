import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="text-[12px] text-white/30 flex flex-col items-center">
      <div className="flex gap-2">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Pricacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
      </div>
      <div className="flex gap-2">
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads info</Link>
        <Link href="/" className="flex">
          <span>More</span> <MoreHorizontal />
        </Link>
        <Link href="/">@ 2025 X Corp.</Link>
      </div>
    </div>
  );
}

export default Footer;
