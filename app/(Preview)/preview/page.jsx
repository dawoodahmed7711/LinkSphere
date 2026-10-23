
"use client";

import { SystemContext } from "@/app/ContextAPI.jsx";
import { useContext } from "react";

export default function PreviewPage() {
  const { pageData } = useContext(SystemContext);

  return (
    <div
      className={`flex min-h-screen flex-col items-center px-4 py-12 ${
        pageData.Theme.Background || "bg-white"
      }`}
    >
      <main className="flex w-full max-w-md flex-1 flex-col items-center">
        {/* Profile Image */}
        {pageData.Profile.Image && (
          <img
            src={pageData.Profile.Image}
            alt={pageData.Profile.Title || "Profile"}
            className={`h-24 w-24 object-cover ${
              pageData.Profile.Shape || "rounded-full"
            }`}
          />
        )}

        {/* Title */}
        <h1
          className="mt-5 text-2xl font-bold 
          text-gray-900"
        >
          {pageData.Profile.Title}
        </h1>

        {/* Bio */}
        <p
          className="mt-2 text-center text-sm  text-black "
          
        >
          {pageData.Profile.Bio}
        </p>

        {/* Links */}
        <div className="mt-8 flex w-full flex-col gap-4">
          {pageData.Links.map((link) => (
            <a
              key={link.id}
              href={link.Url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 text-center text-sm font-semibold shadow-sm transition ${
                pageData.Theme.Button || "bg-sky-500"
              } ${pageData.Theme.ButtonStyle || "rounded-full"} ${
                pageData.TextStyle.TextColor || "text-white"
              } ${pageData.TextStyle.TextFont || ""} ${
                pageData.TextStyle.TextDecoration || ""
              } ${pageData.TextStyle.TextHover || ""}`}
            >
              {link.Name}
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <h6 className="mt-12 text-xs text-gray-400">
        Created with{" "}
        <span className="font-bold text-blue-600">LinkSphere</span>
      </h6>
    </div>
  );
}
