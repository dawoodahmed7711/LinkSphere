"use client";
import { SystemContext } from "@/app/ContextAPI.jsx";
import { useServerInsertedHTML } from "next/navigation";
import { useContext, useState } from "react";
// ---------- Background ----------
// ---------- Background ----------
const backgrounds = [
  {
    name: "aurora glass",
    css: "bg-sky-100 bg-[radial-gradient(circle_at_20%_25%,#c4b5fd,transparent_55%),radial-gradient(circle_at_80%_75%,#67e8f9,transparent_55%)] border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]",
  },
  {
    name: "peach glass",
    css: "bg-orange-100 bg-[radial-gradient(circle_at_25%_30%,#fdba74,transparent_55%),radial-gradient(circle_at_75%_70%,#f9a8d4,transparent_55%)] border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]",
  },
  {
    name: "mint glass",
    css: "bg-emerald-100 bg-[radial-gradient(circle_at_30%_25%,#6ee7b7,transparent_55%),radial-gradient(circle_at_70%_75%,#7dd3fc,transparent_55%)] border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]",
  },
  {
    name: "lavender glass",
    css: "bg-violet-100 bg-[radial-gradient(circle_at_30%_30%,#d8b4fe,transparent_55%),radial-gradient(circle_at_70%_70%,#f9a8d4,transparent_55%)] border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]",
  },
  {
    name: "midnight glass",
    css: "bg-slate-900 bg-[radial-gradient(circle_at_25%_25%,#6366f1,transparent_55%),radial-gradient(circle_at_75%_75%,#0ea5e9,transparent_55%)] border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)]",
  },
  {
    name: "liquid glass",
    css: "bg-sky-100 bg-[radial-gradient(circle_at_30%_30%,#f9a8d4,transparent_55%),radial-gradient(circle_at_70%_70%,#7dd3fc,transparent_55%)] border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]",
  },
];

// ---------- Button Color ----------
// Index-wise matching: buttonColors[i] goes with backgrounds[i]
const buttonColors = [
  {
    name: "aurora glass",
    css: "bg-violet-400 bg-[linear-gradient(135deg,#a78bfa,#22d3ee)] text-white border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_12px_rgba(139,92,246,0.4)]",
  },
  {
    name: "peach glass",
    css: "bg-orange-400 bg-[linear-gradient(135deg,#fb923c,#f472b6)] text-white border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_12px_rgba(251,146,60,0.45)]",
  },
  {
    name: "mint glass",
    css: "bg-emerald-400 bg-[linear-gradient(135deg,#34d399,#38bdf8)] text-white border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_12px_rgba(20,184,166,0.4)]",
  },
  {
    name: "lavender glass",
    css: "bg-purple-400 bg-[linear-gradient(135deg,#c084fc,#f472b6)] text-white border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_12px_rgba(192,38,211,0.4)]",
  },
  {
    name: "midnight glass",
    css: "bg-indigo-500 bg-[linear-gradient(135deg,#6366f1,#0ea5e9)] text-white border border-white/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_4px_14px_rgba(99,102,241,0.55)]",
  },
  {
    name: "liquid glass",
    css: "bg-sky-100 bg-[radial-gradient(circle_at_30%_30%,#f9a8d4,transparent_55%),radial-gradient(circle_at_70%_70%,#7dd3fc,transparent_55%)] border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]",
  },
];

// ---------- Button Shape ----------
const buttonShapes = [
  { name: "rounded", css: "rounded-xl" },
  { name: "square", css: "rounded-none" },
  { name: "oval", css: "rounded-full" },
];

export default function BackgroundBox() {
    const {setPageData ,  CurrentUser}  = useContext(SystemContext)
   const [CurrentBG ,  setCurrentBG] = useState("")
   const [CustomBG  ,  setCustomBG] = useState("")
   const [CurrentColor ,  setCurrentColor] = useState("")
    const [CustomColor  ,  setCustomColor] = useState("")
    const [ButtonShape ,  setButtonShape] = useState("")

  

 

  function GetData(e){
    e.preventDefault();
    setPageData((prev) => ({
    ...prev,
    Theme: {
      ...prev.Theme,
      Background:CurrentBG || CustomBG,
      Button:CurrentColor || CustomColor,
      ButtonStyle:ButtonShape

    },
  }));
    
  }
  console.log(CurrentUser)
  return (
    <form onSubmit={GetData} className="w-full">
      {/* ---------- Background ---------- */}
      <h3 className="text-sm font-bold text-blue-900">Background</h3>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {backgrounds.map((item, index) => (
          <div key={item.name}>
            <input
              type="radio"
              name="background"
              id={`bg-${item.name}`}
              value={item.name}
              defaultChecked={index === 0}
              onChange={() => setCurrentBG(item.css)}
              className="peer sr-only"
            />
            <label
              htmlFor={`bg-${item.name}`}
              title={item.name}
              className={`block h-12 w-12 cursor-pointer rounded-lg shadow-sm transition hover:scale-105 peer-checked:ring-2 peer-checked:ring-sky-500 peer-checked:ring-offset-2 ${item.css}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <label htmlFor="bg-custom" className="text-xs font-semibold text-blue-900">
          Custom color :
        </label>
        <input
          id="bg-custom"
          name="backgroundCustom"
          type="color"
          defaultValue="#38bdf8"
          onChange={(e) => setCustomBG(e.target.css)}
          className="h-9 w-14 cursor-pointer rounded-md bg-[#bbdcf5] p-1"
        />
      </div>

      {/* ---------- Button Color ---------- */}
      <h3 className="mt-8 text-sm font-bold text-blue-900">Button Color</h3>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {buttonColors.map((item, index) => (
          <div key={item.name}>
            <input
              type="radio"
              name="buttonColor"
              id={`btn-color-${item.name}`}
              value={item.name}
              defaultChecked={index === 0}
              onChange={() => setCurrentColor(item.css)}
              className="peer sr-only"
            />
            <label
              htmlFor={`btn-color-${item.name}`}
              title={item.name}
              className={`block h-12 w-12 cursor-pointer rounded-lg shadow-sm transition hover:scale-105 peer-checked:ring-2 peer-checked:ring-sky-500 peer-checked:ring-offset-2 ${item.css}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <label htmlFor="btn-color-custom" className="text-xs font-semibold text-blue-900">
          Custom color :
        </label>
        <input
          id="btn-color-custom"
          name="buttonColorCustom"
          type="color"
          defaultValue="#f43f5e"
          onChange={(e) => setCustomColor(e.target.css)}
          className="h-9 w-14 cursor-pointer rounded-md bg-[#bbdcf5] p-1"
        />
      </div>

      {/* ---------- Button Shape ---------- */}
      <h3 className="mt-8 text-sm font-bold text-blue-900">Button Shape</h3>

      <div className="mt-4 flex items-center gap-4">
        {buttonShapes.map((item, index) => (
          <div key={item.name} className="flex-1">
            <input
              type="radio"
              name="buttonShape"
              id={`btn-shape-${item.name}`}
              value={item.name}
              defaultChecked={index === 0}
              onChange={() => setButtonShape(item.css)}
              className="peer sr-only"
            />
            <label
              htmlFor={`btn-shape-${item.name}`}
              className={`flex h-10 w-full cursor-pointer items-center justify-center bg-[#bbdcf5] text-xs font-semibold capitalize text-blue-900 transition hover:bg-[#a8d0ef] peer-checked:bg-sky-500 peer-checked:text-white ${item.css}`}
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