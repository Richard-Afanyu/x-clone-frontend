import { LucideProps } from "lucide-react";
import Link from "next/link";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
  title: string;
  link: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

function SidebarRow({ link, title, Icon }: Props) {
  return (
    <Link
      href={link}
      className="flex gap-3 hover:font-bold transition-all ease-out duration-100"
    >
      <div className="relative">
        <Icon />
      </div>
      <span className="">{title}</span>
    </Link>
  );
}

export default SidebarRow;
