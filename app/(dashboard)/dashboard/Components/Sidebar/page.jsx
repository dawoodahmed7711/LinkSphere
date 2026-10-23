"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUser, FiLink, FiEdit2, FiLogOut } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";

export const sidebarItems = [
  { id: "header", label: "Header", icon: FiUser, path: "/dashboard" },
  { id: "background", label: "Background", icon: LuCrown, path: "/dashboard/Background" },
  { id: "links", label: "Links", icon: FiLink, path: "/dashboard/Links" },
  { id: "text", label: "Text", icon: FiEdit2, path: "/dashboard/Text" },
  { id: "logout", label: "Logout", icon: FiLogOut, path: "/" },
];

export default function Sidebar({ onLogout }) {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed inset-x-0 bottom-0 z-50 flex w-full flex-row items-center justify-around
        border-t border-sky-100 bg-white/90 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md
        md:static md:inset-auto md:z-auto md:w-28 md:shrink-0 md:flex-col md:justify-start
        md:gap-6 md:border-0 md:bg-transparent md:px-0 md:py-8 md:backdrop-blur-none
      "
    >
      {sidebarItems.map(({ id, label, icon: Icon, path }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={id}
            href={path}
            className="group flex min-w-0 flex-1 flex-col items-center gap-1 focus:outline-none md:flex-none md:gap-2"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full text-lg transition md:h-12 md:w-12 md:text-xl ${
                isActive
                  ? "bg-sky-500 text-white shadow-md"
                  : "bg-sky-100 text-sky-500 group-hover:bg-sky-200"
              }`}
            >
              <Icon />
            </span>
            <span
              className={`truncate text-[10px] md:text-xs ${
                isActive ? "font-semibold text-sky-600" : "text-gray-800"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </aside>
  );
}