"use client";

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setHideTop(window.scrollY > 80);
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-[999] w-full bg-background shadow-[0_1px_0_rgba(0,0,0,0.08)] transition-all duration-500">
      <div className={`overflow-hidden transition-all duration-500 ${hideTop ? "max-h-0 opacity-0" : "max-h-[42px] opacity-100"}`}>
        <TopBar />
      </div>

      <Navbar />
    </header>
  );
}
