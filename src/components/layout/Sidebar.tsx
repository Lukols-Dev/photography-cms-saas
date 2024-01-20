"use client";

import { SIDEBAR_ITEMS } from "@/lib/constans";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {
  return (
    <aside className="w-[70px] lg:w-60 h-screen pt-28 flex flex-col bg-white z-20">
      <ul className="w-full h-auto">
        {SIDEBAR_ITEMS.map(({ name, href, icon }) => (
          <SidebarItem title={name} path={href} icon={icon} />
        ))}
      </ul>
    </aside>
  );
};

interface SidebarItemProps {
  title: string;
  path: string;
  icon: any;
}

const SidebarItem = ({ title, path, icon: Icon }: SidebarItemProps) => {
  const pathname = usePathname();
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    setActive(pathname === path);
  }, [pathname]);

  const DynamicTag = isActive ? "p" : Link;

  return (
    <DynamicTag href={path} key={title}>
      <li
        className={clsx(
          "flex flex-row gap-4 xl:px-20 md:px-10 sm:px-2 px-4 py-3 text-[#A1A0BD] hover:text-[#4C49ED] hover:bg-[#E4E3FF] transition font-semibold items-center justify-beetwen cursor-pointer group",
          { "text-[#4C49ED] bg-[#E4E3FF]": isActive }
        )}
      >
        <span>
          <Icon
            className={clsx(
              "w-6 h-6 text-[#A1A0BD] group-hover:text-[#4C49ED]",
              { "text-[#4C49ED]": isActive }
            )}
          />
        </span>
        {title}
      </li>
    </DynamicTag>
  );
};

export default Sidebar;
