"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/navLinks";
import ServicesDropdown from "./ServicesDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import MobileMenu from "./MobileMenu";
import { BsArrowUpRight } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="h-[76px] bg-white/95 backdrop-blur-sm border-b border-surface-border lg:h-[90px] sticky top-0 z-[999]">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-6 px-4 sm:px-8">
          <Link href="/" className="shrink-0" aria-label="زاوية الضوء — الرئيسية">
            <img src="/logo.png" alt="شعار زاوية الضوء" className="h-[58px] w-auto object-contain lg:h-[76px]" />
          </Link>

          <ul className="relative hidden items-center gap-1 lg:flex xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.title} className="group relative">
                <Link
                  href={item.href}
                  data-active={pathname === item.href ? "true" : undefined}
                  className="nav-link"
                >
                  {item.title}
                </Link>
                {item.submenu === "services" && <ServicesDropdown />}
                {item.submenu === "projects" && <ProjectsDropdown />}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="btn-primary-lg group"
            >
              ابدأ مشروعك
              <BsArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="grid h-12 w-12 place-items-center border border-surface-border bg-white rounded-lg lg:hidden hover:bg-surface-hover hover:border-red transition-colors"
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