"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/navLinks";
import ServicesDropdown from "./ServicesDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import MobileMenu from "./MobileMenu";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-[76px] bg-background text-black lg:h-[90px]">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-6 px-4 sm:px-8">
          <Link href="/" className="shrink-0" aria-label="زاوية الضوء — الرئيسية">
            <img src="/logo.png" alt="شعار زاوية الضوء" className="h-[58px] w-auto object-contain lg:h-[76px]" />
          </Link>

          <ul className="relative hidden items-center gap-8 lg:flex xl:gap-11">
            {NAV_ITEMS.map((item) => (
              <li key={item.title} className="group relative">
                <Link href={item.href} className="py-6 text-[14px] font-medium text-black/75 transition hover:text-primary xl:text-[15px]">{item.title}</Link>
                {item.submenu === "services" && <ServicesDropdown />}
                {item.submenu === "projects" && <ProjectsDropdown />}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="group flex h-12 items-center gap-5 bg-dark-surface py-1 pr-6 pl-1 text-[14px] font-semibold text-white transition hover:bg-primary"
            >
              ابدأ مشروعك
              <div className="grid h-10 w-10 place-items-center bg-primary text-white transition group-hover:bg-white group-hover:text-primary" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 24% 100%)" }}>
                <BsArrowUpRight className="transition duration-500 group-hover:-translate-y-0.5 group-hover:rotate-90" />
              </div>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="grid h-12 w-12 place-items-center border border-black/15 bg-white lg:hidden"
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
