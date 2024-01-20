import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex gap-2 items-center justify-center">
        <CameraIcon className="w-6 h-6" />
        <p className=" hidden md:flex">Photography CMS</p>
        {/* <Image
        className="block cursor-pointer"
        src="/images/logo.png"
        height="100"
        width="100"
        alt="Logo"
      /> */}
      </div>
    </Link>
  );
};

export default Logo;
