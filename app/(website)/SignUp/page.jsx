'use client'
import { useContext, useState } from "react";
import { SystemContext } from '@/app/ContextAPI.jsx';
import Link from "next/link.js";
import { useRouter } from "next/navigation";
export default function Signup() {
    const router = useRouter()
  const {GetSignUp ,  SignUp} = useContext(SystemContext)
    const [FullName , setFullName] = useState("")
    const [Gmail  ,  setGmail] = useState("")
    const [Password ,  setPassword] = useState("")
    const [Confirm ,  setConfirm] = useState("")
    const [username ,  setusername] = useState("")
  
    function GetData(e){
      e.preventDefault();
      const obj = {
        Username:username,
        Name:FullName,
        Gmail:Gmail,
        Password:Password,
      }
      if(Password === Confirm) {
        GetSignUp(obj)
      }
      else {
        return;
      }
      setFullName("")
      setGmail("")
      setPassword("")
      setConfirm("")
     router.push('/Login')
    }
  

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl shadow-xl p-8 mt-5 mb-5">
        <div className="text-center mb-8">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-blue-600">
              LinkSphere
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign up to get started in seconds
          </p>
        </div>

        <form  className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              UserName
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
             value={username}
             onChange={(e)=>setusername(e.target.value)}
              placeholder="johndoe123"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
            />
          </div>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
             value={FullName}
             onChange={(e)=>setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gmail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              pattern="[a-zA-Z0-9._%+\-]+@gmail\.com"
              value={Gmail}
             onChange={(e)=>setGmail(e.target.value)}
              placeholder="you@gmail.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                value={Password}
             onChange={(e)=>setPassword(e.target.value)}
                required
                minLength={8}
                placeholder="At least 8 characters"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-16 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
              />
              
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
             Confirm Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                value={Confirm}
             onChange={(e)=>setConfirm(e.target.value)}
                required
                minLength={8}
                placeholder="Re-enter Password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-16 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
              />
              
            </div>
          </div>

          <button onClick={GetData}
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 active:scale-[0.99]"
          >
            Sign up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/Login"  className="font-semibold text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
