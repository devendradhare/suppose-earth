"use client";
import React, { useState } from "react";
import Link from "next/link";
import useSignup from "@/hooks/signup";
import { useAuth } from "@/context/authContext";

const Index = () => {
  const { user, googleSignIn, logout } = useAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
      console.log("user : ", user);
    } catch (error) {
      console.log("error in login page google signin : ", error);
    }
  };
  const { loading, signup } = useSignup();

  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(e) {
    setUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup(userForm);
    console.log(res);
    if (res.status)
      setUser({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
  }
  return (
    <>
      <div className="[&_*]:borde min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 pt-0 sm:p-12 sm:pt-0">
            <h1 className="text-center text-2xl xl:text-3xl font-extrabold">
              Sign In
            </h1>
            <div className="flex flex-col items-center mt-8">
              <button
                onClick={() => handleSignIn()}
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-gray-800 border border-white/5
                        flex items-center justify-center transition-all duration-300 ease-in-out 
                        hover:shadow-lg focus:shadow-outline hover:border-white/25 
                        backdrop-blur-2xl"
              >
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4">Sign In with Google</span>
              </button>
            </div>
            <div className="my-12 text-center flex items-center">
              <div className="border grow"></div>
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium transform -translate-y-1/3">
                Or sign In with Email
              </div>
              <div className="border grow"></div>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <form className="w-full flex-1" onSubmit={(e) => handleSubmit(e)}>
                <div className="mx-auto max-w-xs [&_input]:backdrop-blur-2xl duration-200">
                  <input
                    type="text"
                    name="username"
                    value={userForm.username}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Username"
                    className="w-full px-8 py-4 rounded-lg font-medium border border-white/20 placeholder-gray-500 text-sm 
                              focus:border-gray-400 bg-transparent focus:bg-white/25 mt-0 hover:shadow-md duration-200"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={userForm.email}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Email"
                    className="w-full px-8 py-4 rounded-lg font-medium border border-white/20 placeholder-gray-500 text-sm 
                              focus:border-gray-400 bg-transparent focus:bg-white/25 mt-5 hover:shadow-md duration-200"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    value={userForm.email}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Password"
                    className="w-full px-8 py-4 rounded-lg font-medium border border-white/20 placeholder-gray-500 text-sm 
                              focus:border-gray-400 bg-transparent focus:bg-white/25 mt-5 hover:shadow-md duration-200"
                    required
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={userForm.password}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Confirm Password"
                    className="w-full px-8 py-4 rounded-lg font-medium border border-white/20 placeholder-gray-500 text-sm 
                              focus:border-gray-400 bg-transparent focus:bg-white/25 mt-5 hover:shadow-md duration-200"
                    required
                  />
                  <button
                    className="border mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                    {loading ? (
                      <span className="loading loading-dots loading-lg"></span>
                    ) : (
                      <span className="ml-3">Sign Up</span>
                    )}
                  </button>
                </div>

                <p className="text-center">
                  Already have an account?
                  <Link
                    href="/login"
                    className="text-[rgba(150,150,255,1)] ml-2"
                  >
                    login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
