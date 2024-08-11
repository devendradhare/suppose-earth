"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// context
import { useStore } from "/src/context/Store.jsx";
import { useAuth } from "@/context/authContext.jsx";
// images
import menuicon from "/public/menu2.svg";

const Navbar = ({ isScrolled }) => {
  const { theme, setTheme } = useStore();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  function handleMenuClick(dontTouch = false) {
    setIsOpen((prev) => dontTouch || !prev);
    console.log("menu clicked isOpen: ", isOpen);
  }
  return (
    <nav
      className={`${"myGradient"} myBlur3 duration-500 myFont sticky h-[10svh] top-0 w-screen flex justify-between xl:px-80 sm:px-24 min-[426px]:px-10 px-5 py-5 z-50`}
    >
      <div className="relative">
        <div className="text-lg uppercase font-semibold dvnTextGradient ">
          Suppose Earth
        </div>
        <div className="absolute -top-2 -right-7 z-10 text-sm text-white rounded-md">
          beta
        </div>
      </div>
      <div>
        <Image
          className="md:hidden"
          src={menuicon}
          alt="menu"
          width={30}
          height={50}
          onClick={() => handleMenuClick()}
        />
        <div
          className={
            isOpen
              ? `md:flex gap-10 hidden`
              : `w-screen h-[90svh] flex flex-col items-center justify-center text-2xl gap-4 absolute top-[10svh] right-0 bg-black`
          }
          onClick={() => handleMenuClick(true)}
        >
          <Link
            href="/"
            className="btn btn-sm btn-ghost hover:bg-transparent font-sans  px-4"
          >
            Home
          </Link>
          <Link
            href="/calendar"
            className="btn btn-sm btn-ghost hover:bg-transparent font-sans px-4"
          >
            Events
          </Link>
          <Link
            href="/blogs"
            className="btn btn-sm btn-ghost hover:bg-transparent font-sans px-4"
          >
            Blogs
          </Link>
          {user ? (
            <div className="dropdown dropdown-hover dropdown-content">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-8 rounded-full">
                  <Image src={user.photoURL} width={100} height={100} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <p>hello! {user.displayName} </p>
                </li>
                <li>
                  <a onClick={() => logout()}>logout</a>
                </li>
                <li>
                  <a>demo link 3</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-sm btn-ghost hover:bg-transparent font-sans px-4"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
