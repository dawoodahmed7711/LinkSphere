'use client'
import { useEffect, useRef, useState } from "react";
import { Link2, User, Menu, X } from "lucide-react";
import Link from "next/link";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState("/");
  const ref = useRef(null);

  // Current page (set after mount to avoid SSR mismatch).
  // If you use next/navigation, replace with: const path = usePathname();
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  // Close on outside click, Escape, or when screen grows to desktop size
  useEffect(() => {
    const onPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const linkCls = (active) =>
    `text-sm font-medium transition ${
      active ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white backdrop-blur"
    >
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Link2 size={14} strokeWidth={2.5} />
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-900">
            LinkSphere
          </span>
        </a>

        {/* Desktop center links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={linkCls(path === href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/Login" className={linkCls(false)}>
            Login
          </Link>
          <a
            href="/SignUp"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Sign Up
          </a>
          <button
            aria-label="Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
          >
            <User size={15} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          <Menu
            size={20}
            className={`absolute transition duration-300 ${
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <X
            size={20}
            className={`absolute transition duration-300 ${
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`grid transition-all duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg shadow-slate-200/60">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium transition ${
                  path === href
                    ? "bg-indigo-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {label}
              </a>
            ))}

            <Link
              href="/Login"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Login
            </Link>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/SignUp"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Sign Up
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}