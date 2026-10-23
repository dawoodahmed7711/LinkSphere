'use client'
import { Link2, Camera, Briefcase, PlayCircle } from "lucide-react";

const navLinks = ["Home", "About", "Features", "FAQs"];

export default function Footer() {
  return (
    <footer className=" border-t border-slate-100 bg-[#EEF1FD]">
      <div className="mx-auto max-w-[1200px] px-4 pb-6 pt-8 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white">
                <Link2 size={12} strokeWidth={2.5} />
              </span>
              <span className="text-sm font-semibold text-slate-900">
                LinkSphere
              </span>
            </a>
            <p className="mt-3 max-w-[180px] text-xs leading-relaxed text-slate-500">
              One simple link for everything you create and share.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:pl-24">
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-xs text-slate-600 transition hover:text-blue-600"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:pl-24">
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Connect
            </h4>
            <div className="mt-3 flex gap-3">
              {[Camera, Briefcase, PlayCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-slate-500 shadow-sm transition hover:text-blue-600"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-4 text-[10px] text-slate-500 sm:flex-row">
          <p>© 2026 LinkSphere. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-800">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}