"use client";
import React, { useRef, useState } from "react";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import ParallexBG from "@/components/ParallexBG.jsx";

import StoreProvider, { useStore } from "@/context/Store.jsx";

const MySection = ({ children }) => {
  const divRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(0);
  const { scrollRef, hello, setHello } = useStore();
  function handleScroll() {
    setIsScrolled(divRef.current.scrollTop);
  }
  return (
    <section className="mySection" ref={divRef} onScroll={() => handleScroll()}>
      <Navbar isScrolled={isScrolled} />
      <ParallexBG />
      {children}
      <Footer />
    </section>
  );
};

export default MySection;
