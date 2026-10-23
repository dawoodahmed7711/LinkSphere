"use client";
import { SystemContext } from "@/app/ContextAPI.jsx";
import { useContext, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const FrameCss = {
  frame:
    "flex h-20 w-16 cursor-pointer items-center justify-center rounded-lg bg-[#bbdcf5] transition hover:bg-[#a8d0ef] peer-checked:ring-2 peer-checked:ring-sky-500",
};

// Layout wale boxes — naya shape add karna ho to bas yahan aik object add karo
const shapes = [
  { id: "Circle", imgCss: "aspect-square object-cover rounded-full" },
  { id: "Hero", imgCss: "rounded-t-[50%] [mask-image:linear-gradient(to_bottom,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]" },
  { id: "Shape", imgCss: "aspect-square object-cover rounded-[60%_40%_30%_70%]" },
  { id: "Hexagon", imgCss: "aspect-square object-cover [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" },
];

export default function HeaderBox() {
  const {setPageData} = useContext(SystemContext)
  const [SelectedShape , setSelectedshape] = useState("")
  const [Image ,  setImage] = useState("")
  const [Title ,  setTitle] = useState("")
  const [Bio ,  setBio] = useState("")

  function handleShapeClick(e) {
    e.preventDefault();
  if(SelectedShape === "" && Image ==="" && Title === ""&& Bio===""){
    return;
  }
    setPageData((prev) => ({
    ...prev,
    Profile: {
      ...prev.Profile,
      Shape: SelectedShape,
      Image: Image,
      Title: Title,
      Bio: Bio,
    },
  }));
     
  };

  return (
    <form onSubmit={handleShapeClick}  className="w-full max-w-[440px] rounded-2xl bg-gray-100 p-5">
      {/* ---------- Layout ---------- */}
      <h3 className="text-sm font-bold text-blue-900">Layout</h3>

      <div className="mt-4 flex items-center gap-5">
        {shapes.map((shape, index) => (
          <div key={shape.id}>
            <input
              type="radio"
              name="shape"
              id={`shape-${shape.id}`}
              value={shape.id}
              defaultChecked={index === 0}
             onClick={()=>setSelectedshape(shape.imgCss)}
              className="peer sr-only"
            />
            <label htmlFor={`shape-${shape.id}`} className={FrameCss.frame}>
              <img
                src="/profile.jpg"
                alt={shape.id}
                className={`h-10 w-10 object-cover ${shape.imgCss}`}
              />
            </label>
          </div>
        ))}
      </div>

      {/* ---------- Profile image ---------- */}
      <h3 className="mt-6 text-sm font-bold text-blue-900">
        Set Your Profile Image
      </h3>

      <label className="mt-3 flex h-24 w-full border-sky-400 border-2 cursor-pointer flex-col items-center justify-center gap-3 rounded-md bg-white transition hover:border-2 border-sky-400">
        <FiUploadCloud className="text-4xl text-sky-500" />
        <span className="text-[11px] font-bold text-blue-900">
         {Image ? "Image Selected" : "Click to Upload Image"  }
        </span>
       
      <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }}
  className="hidden bg-white"
/>
      </label>

      {/* ---------- Title ---------- */}
      <div className="mt-6 flex items-center gap-5">
        <label htmlFor="header-title" className="w-12 text-sm font-bold text-blue-900">
          Title:
        </label>
        <input
          id="header-title"
          onChange={(e)=>setTitle(e.target.value)}
          name="title"
          type="text"
          placeholder="Enter Title"
          className="h-9 w-44 rounded-sm bg-white border-sky-400 border-2  px-2 text-sm text-black outline-none focus:ring-1 focus:ring-sky-400"
        />
      </div>

      {/* ---------- Bio ---------- */}
      <div className="mt-5 flex items-start gap-5">
        <label htmlFor="header-bio" className="w-12 pt-1 text-sm font-bold text-blue-900">
          Bio :
        </label>
        <textarea
          id="header-bio"
          name="bio"
         maxLength={100}
          onChange={(e)=>setBio(e.target.value)}
           placeholder="Add Bio"
          className="h-28 w-full resize-none rounded-sm bg-white border-sky-400 border-2 p-2 text-xs text-black outline-none focus:ring-1 focus:ring-sky-400"
        />
      </div>

      {/* ---------- Save ---------- */}
      <div className="mt-6 flex justify-end">
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