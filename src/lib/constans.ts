import {
  EnvelopeIcon,
  PhotoIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export const MENU = [
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Squares2X2Icon,
  },
  {
    name: "Messages",
    href: "/dashboard/message",
    icon: EnvelopeIcon,
  },
  {
    name: "Gallery",
    href: "/dashboard/gallery",
    icon: PhotoIcon,
  },
];
