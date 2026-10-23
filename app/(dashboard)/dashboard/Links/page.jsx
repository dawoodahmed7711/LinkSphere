"use client";
import { SystemContext } from "@/app/ContextAPI.jsx";
import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
export default function LinksBox() {
  const { pageData, setPageData } = useContext(SystemContext);
  const [LinkTitle, setLinkTitle] = useState("");
  const [LinkURL, setLinkURL] = useState("");

  // Link add karna
  function GetData(e) {
    e.preventDefault();
    setPageData((prev) => {
      if (prev.Links.length >= 5) return prev;

      return {
        ...prev,
        Links: [
          ...prev.Links,
          { id: Date.now(), Name: LinkTitle, Url: LinkURL },
        ],
      };
    });
    setLinkTitle("");
    setLinkURL("");
  }

  // Link delete karna (pageData.Links se hata dega, mobile mockup se bhi chala jayega)
  function DeleteLink(id) {
    setPageData((prev) => ({
      ...prev,
      Links: prev.Links.filter((link) => link.id !== id),
    }));
  }

  return (
    <form onSubmit={GetData} className="w-full">
      {/* ---------- Links ---------- */}
      <h3 className="text-sm font-bold text-blue-900">Links</h3>

      {/* ---------- Link Name ---------- */}
      <h4 className="mt-5 text-xs font-semibold text-blue-900">Link Name</h4>
      <input
        id="link-name"
        name="linkName"
        type="text"
        value={LinkTitle}
        onChange={(e) => setLinkTitle(e.target.value)}
        required
        placeholder="e.g. Github"
        className="mt-2 h-10 w-full rounded-md bg-white border-2 border-sky-400 px-3 text-sm text-black outline-none placeholder:text-blue-900/50 focus:ring-2 focus:ring-sky-400"
      />

      {/* ---------- Link URL ---------- */}
      <h4 className="mt-5 text-xs font-semibold text-blue-900">Link URL</h4>
      <input
        id="link-url"
        name="linkUrl"
        value={LinkURL}
        onChange={(e) => setLinkURL(e.target.value)}
        required
        type="url"
        placeholder="https://github.com/username"
        className="mt-2 h-10 w-full rounded-md bg-white border-2 border-sky-400 px-3 text-sm text-black outline-none placeholder:text-blue-900/50 focus:ring-2 focus:ring-sky-400"
      />

      {/* ---------- Added links list ---------- */}
      <div className="mt-6 flex items-center justify-between">
        <h4 className="text-xs font-semibold text-blue-900">Your Links</h4>
        <span className="text-xs text-gray-500">{pageData.Links.length} / 5</span>
      </div>

      <div className="mt-2 flex flex-col gap-2">
        {pageData.Links.length === 0 && (
          <p className="text-xs text-gray-400">No links added yet</p>
        )}

        {pageData.Links.map((link) => (
          <div
            key={link.id}
            className="flex items-center justify-between gap-3 rounded-md bg-white px-3 py-2 shadow-sm"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-900">{link.Name}</p>
              <p className="truncate text-xs text-gray-500">{link.Url}</p>
            </div>

            {/* type="button" zaroori hai, warna form submit ho jata */}
            <button
              type="button"
              onClick={() => DeleteLink(link.id)}
              className="shrink-0 rounded-md bg-white px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-200"
            >
              <FaTrash/>
            </button>
          </div>
        ))}
      </div>

      {/* ---------- Note ---------- */}
      <p className="mt-4 text-xs text-gray-500">
        You can add only five links in it
      </p>

      {/* ---------- Save ---------- */}
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-sky-500 px-8 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}