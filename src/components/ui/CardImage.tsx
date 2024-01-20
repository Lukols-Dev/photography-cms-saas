import {
  ArchiveBoxIcon,
  CalendarIcon,
  EllipsisVerticalIcon,
  LockOpenIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const CardImage = () => {
  return (
    <div className="p-2 bg-white rounded-md relative shadow-md">
      <div className="absolute top-0 left-0 m-4 flex gap-1">
        <div className="rounded px-2 py-1 text-xs font-bold uppercase bg-blue-500 text-white z-10">
          To do
        </div>
        <div className="rounded p-1 bg-blue-500 text-white z-10">
          <LockOpenIcon className="w-4 h-4" />
        </div>
      </div>
      <Link href="gallery/detail">
        <div className="h-36 overflow-hidden relative">
          <div className="flex items-center justify-center text-white text-medium h-full w-full rounded border-2">
            {/* <Image/> */}
            <PhotoIcon className="w-12 h-12 m-auto text-gray-300" />
          </div>
        </div>
        <div className="flex flex-col p-1 gap-2">
          <div className="flex justify-between items-center text-sm">
            <div className="truncate">{"title"}</div>
            <button className="focus:outline-none">
              <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex text-xs text-gray-500">
            <div className="flex items-center mr-2 gap-1">
              <CalendarIcon className="w-4 h-4" />
              <span>{"12-02-2024"}</span>
            </div>
            <div className="flex items-center mr-2 gap-1">
              <PhotoIcon className="w-4 h-4" />
              <span>{"999"}</span>
            </div>
            <div className="flex items-center mr-2 gap-1">
              {/* Storage icon */}
              <ArchiveBoxIcon className="w-4 h-4" />
              <span>{"20"}MB</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
