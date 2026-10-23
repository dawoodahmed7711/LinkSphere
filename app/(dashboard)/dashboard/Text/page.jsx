"use client";
import { SystemContext } from "@/app/ContextAPI.jsx";
import { useContext, useState } from "react";

// ---------- Text Decoration ----------
const textDecorations = [
  { name: "none", css: "no-underline" },
  { name: "underline", css: "underline underline-offset-4" },
];

// ---------- Text Color ----------
const textColors = [
  { name: "white",   css: "bg-white border border-slate-200", text: "text-white" },
  { name: "ink",     css: "bg-slate-900",                     text: "text-slate-900" },
  { name: "violet",  css: "bg-violet-600",                    text: "text-violet-700" },
  { name: "fuchsia", css: "bg-fuchsia-600",                   text: "text-fuchsia-700" },
  { name: "rose",    css: "bg-rose-500",                      text: "text-rose-600" },
  { name: "teal",    css: "bg-teal-600",                      text: "text-teal-700" },
  { name: "indigo",  css: "bg-indigo-700",                    text: "text-indigo-900" },
];

// ---------- Fonts ----------
// Ye Google Fonts hain, inhein globals.css ya layout.jsx mein import karna zaroori hai
const fonts = [
  { name: "Poppins", css: "font-['Poppins',sans-serif]" },
  { name: "Montserrat", css: "font-['Montserrat',sans-serif]" },
  { name: "Playfair Display", css: "font-['Playfair_Display',serif]" },
  { name: "Roboto Mono", css: "font-['Roboto_Mono',monospace]" },
  { name: "Pacifico", css: "font-['Pacifico',cursive]" },
  { name: "Lobster", css: "font-['Lobster',cursive]" },
];

// ---------- Hover Effects ----------
const hoverEffects = [
  { name: "none", css: "" },
  { name: "lift", css: "hover:-translate-y-1 hover:shadow-md" },
  { name: "grow", css: "hover:scale-105" },
  { name: "glow", css: "hover:shadow-[0_0_14px_rgba(14,165,233,0.7)]" },
];

export default function TextBox() {
  const { setPageData } = useContext(SystemContext);

  // Default values pehle option ke hain, taake bina select kiye bhi save sahi ho
  const [TextDecoration, setTextDecoration] = useState(textDecorations[0].css);
  const [TextColor, setTextColor] = useState(textColors[0].text);
  const [Fonts, setFonts] = useState(fonts[0].css);
  const [Hover, setHover] = useState(hoverEffects[0].css);

  function GetData(e) {
    e.preventDefault();
    setPageData((prev) => ({
      ...prev,
      TextStyle: {
        ...prev.TextStyle, // typo fix: TexStyle -> TextStyle
        TextDecoration: TextDecoration,
        TextColor: TextColor,
        TextFont: Fonts,
        TextHover: Hover,
      },
    }));
  }
console.log(TextColor)
  return (
    <form onSubmit={GetData} className="w-full">
      {/* ---------- Text Decoration ---------- */}
      <h3 className="text-sm font-bold text-blue-900">Text Decoration</h3>

      <div className="mt-4 flex items-center gap-4">
        {textDecorations.map((item, index) => (
          <div key={item.name} className="flex-1">
            <input
              type="radio"
              name="textDecoration"
              id={`decoration-${item.name}`}
              value={item.name}
              defaultChecked={index === 0}
              onChange={() => setTextDecoration(item.css)}
              className="peer sr-only"
            />
           <label
              htmlFor={`decoration-${item.name}`}
              className={`flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-[#bbdcf5] text-xs font-semibold capitalize text-blue-900 transition hover:bg-[#a8d0ef] peer-checked:bg-sky-500 peer-checked:text-white ${item.css}`}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>

      {/* ---------- Text Color ---------- */}
      <h3 className="mt-8 text-sm font-bold text-blue-900">Text Color</h3>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {textColors.map((item, index) => (
          <div key={item.name}>
            <input
              type="radio"
              name="textColor"
              id={`text-color-${item.name}`}
              value={item.name}
              defaultChecked={index === 0}
              onChange={() => setTextColor(item.text)}
              className="peer sr-only"
            />
            <label
              htmlFor={`text-color-${item.name}`}
              title={item.name}
              className={`block h-12 w-12 cursor-pointer rounded-lg shadow-sm transition hover:scale-105 peer-checked:ring-2 peer-checked:ring-sky-500 peer-checked:ring-offset-2 ${item.css}`}
            />
          </div>
        ))}
      </div>

      {/* ---------- Fonts ---------- */}
      <h3 className="mt-8 text-sm font-bold text-blue-900">Fonts</h3>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {fonts.map((item, index) => (
          <div key={item.name}>
            <input
              type="radio"
              name="font"
              id={`font-${item.name}`}
              value={item.name}
              defaultChecked={index === 0}
              onChange={() => setFonts(item.css)}
              className="peer sr-only"
            />
            <label
              htmlFor={`font-${item.name}`}
              className={`flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-[#bbdcf5] px-2 text-center text-xs text-blue-900 transition hover:bg-[#a8d0ef] peer-checked:bg-sky-500 peer-checked:text-white ${item.css}`}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>

      {/* ---------- Button Hover Effect ---------- */}
      <h3 className="mt-8 text-sm font-bold text-blue-900">Button Hover Effect</h3>

      <div className="mt-4 flex items-center gap-4">
        {hoverEffects.map((item, index) => (
          <div key={item.name} className="flex-1">
            <input
              type="radio"
              name="hoverEffect"
              id={`hover-${item.name}`}
              value={item.name}
              defaultChecked={index === 0}
              onChange={() => setHover(item.css)}
              className="peer sr-only"
            />
            <label
              htmlFor={`hover-${item.name}`}
              className={`flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-[#bbdcf5] text-xs font-semibold capitalize text-blue-900 transition peer-checked:bg-sky-500 peer-checked:text-white ${item.css}`}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>

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