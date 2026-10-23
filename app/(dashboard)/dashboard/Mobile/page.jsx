"use client";
import { SystemContext } from "@/app/ContextAPI.jsx";
import { useContext } from "react";
import Link from "next/link";

export default function MobilePreview() {
  const { pageData } = useContext(SystemContext);

  const profile = pageData?.Profile ?? {};
  const theme = pageData?.Theme ?? {};
  const textStyle = pageData?.TextStyle ?? {};
  const links = pageData?.Links ?? [];

  return (
    <div
      className={`relative mx-auto flex min-h-[420px] w-full max-w-[230px] flex-col items-center rounded-[36px] border-2 border-black px-3 pt-5 pb-8 shadow-lg ${theme.Background ?? ""}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black" />

      {profile.Image && (
        <img
          src={profile.Image}
          alt={profile.Title || "Profile"}
          className={`mt-8 h-12 w-12 shrink-0 object-cover ${profile.Shape ?? ""}`}
        />
      )}

      <h4
        className={`mt-3 max-w-full break-words text-center text-[11px] font-extrabold text-black ${!profile.Image ? "mt-8" : ""}`}
      >
        {profile.Title}
      </h4>

      <p className="mt-2 line-clamp-4 max-w-full break-words px-2 text-center text-[7px] leading-tight text-black">
        {profile.Bio}
      </p>

      <div className="mt-4 flex w-full flex-col gap-3 px-3">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.Url}
            className={`block w-full truncate px-2 py-1.5 text-center text-[10px] transition hover:scale-[1.03] ${theme.ButtonStyle ?? ""} ${textStyle.TextFont ?? ""} ${theme.Button ?? ""} ${textStyle.TextDecoration ?? ""} ${textStyle.TextColor ?? ""} ${textStyle.TextHover ?? ""}`}
          >
            {link.Name}
          </Link>
        ))}
      </div>

      <footer className="mt-auto pt-4 text-[6px] text-black">
        Created By LinkSphere
      </footer>

      {/* home indicator */}
      <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-black" />
    </div>
  );
}