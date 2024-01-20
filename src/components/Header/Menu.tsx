import { MENU } from "@/lib/constans";
import { MenuItem } from "@/types/layout";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="flex items-center">
      {/* <ul className="text-sm flex items-center">
        {MENU.map((item: MenuItem) => (
          <li
            key={item.title}
            className="group flex flex-col relative p-4  bg-transparent"
          >
            <Link href={item.path}>{item.title} </Link>
            <span className="w-2 h-2 absolute top-11 left-1/2 transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-custom bg-white rounded-full group-hover:scale-100" />
          </li>
        ))}
      </ul> */}
      <div className="p-2 rounded-full bg-white text-black">
        <UserIcon className="w-6 h-6" />
      </div>
    </nav>
  );
};

export default Menu;
