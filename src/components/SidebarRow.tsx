import { LucideProps } from "lucide-react";
import Link from "next/link";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
  title: string;
  link: string;
  newStuff: boolean;
  value?: number;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

function SidebarRow({ link, title, Icon, value, newStuff }: Props) {
  const noValue = "w-1 h-1 bg-twitter rounded-full absolute top-0 right-0";
  const withValue =
    "w-3 h-3 bg-twitter rounded-full absolute flex items-center justify-center text-[12px]  top-0 right-0";
  return (
    <Link
      href={link}
      className="flex gap-3 hover:font-bold transition-all ease-out duration-100"
    >
      <div className="relative">
        <Icon />
        {newStuff && (
          <span className={value ? withValue : noValue}>
            {value && <span>{value}</span>}
          </span>
        )}
      </div>
      <span>{title}</span>
    </Link>
  );
}

export default SidebarRow;
