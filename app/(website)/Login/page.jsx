'use client'
import { useContext, useState } from "react";
import { SystemContext } from "../../ContextAPI.jsx";
import { useRouter } from 'next/navigation'
import Link from "next/link.js";

export default function Login() {
  const router = useRouter()
  const { GetLogin, SignUp, setCurrentUser, CurrentUser } = useContext(SystemContext)
  const inputCls =
    "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30";
  const [Gmail, setGmail] = useState("")
  const [Password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  sessionStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));

  function GetData() {
   
    if (Gmail === "" || Password === "" || username === "") {
      return;
    }
    if (!Gmail.endsWith("@gmail.com")) {
      console.log("Please enter a valid Gmail address")
      return;
    }

    const obj = {
      Gmail: Gmail,
      Password: Password,
      Username: username,
    }
    GetLogin(obj)
    const Final = SignUp.find((item) => item.Gmail === obj.Gmail && item.Password === obj.Password && item.Username === obj.Username);

    if (Final) {
      setCurrentUser(Final)
      router.push('/dashboard')
    } else {
      console.log('invalid gmail & password')
    }
    console.log(Final)

    setGmail("")
    setPassword("")
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl shadow-xl p-8">
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
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-1 text-sm text-gray-500">
            Log in to manage your links
          </p>
        </div>

        {/* form tag ki jagah simple div */}
        <div className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe123"
              className={inputCls}
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
              value={Gmail}
              onChange={(e) => setGmail(e.target.value)}
              placeholder="you@gmail.com"
              className={inputCls}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && GetData()}
              placeholder="Enter your password"
              className={inputCls}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 rounded border-gray-300 accent-blue-600"
              />
              Remember me
            </label>
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="button"
            
            onClick={GetData}
            className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 active:scale-[0.99]"
          >
            Log in
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/SignUp" className="font-semibold text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}