"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// context
import { useStore } from "/src/context/Store.jsx";
// images
import menuicon from "/public/menu2.svg";

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, setTheme } = useStore();

  function handleMenuClick(dontTouch = false) {
    setIsOpen((prev) => dontTouch || !prev);
    console.log("menu clicked isOpen: ", isOpen);
  }
  return (
    <nav
      className={`${"myGradient"} myBlur3 duration-500 myFont sticky h-[10svh] top-0 w-screen flex justify-between xl:px-80 sm:px-24 min-[426px]:px-10 px-5 py-5 z-50`}
    >
      <div className="text-lg uppercase font-semibold dvnTextGradient">
        Suppose Earth
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
          <Link href="/" className="btn font-sans  md:block px-4">
            Home
          </Link>
          <Link href="/about" className="btn font-sans  md:block px-4">
            About
          </Link>
          <Link href="/blogs" className="btn font-sans  md:block px-4">
            Blogs
          </Link>
          <Link href="/login" className="btn font-sans  md:block px-4">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
