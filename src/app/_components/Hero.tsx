"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { heroData } from "../data/heroData";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:py-16 xl:px-10">
      <div className="mx-auto grid max-w-[1600px] overflow-hidden bg-ink text-white lg:min-h-[680px] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 flex min-h-[440px] flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[680px] lg:px-14 xl:px-20">
          <div className="absolute right-0 top-0 h-24 w-24 bg-red/20" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} aria-hidden="true" />

          <div className="relative animate-fade-in-up">
            <div className="mb-7 flex items-center gap-3 text-caption text-red-bright sm:mb-8">
              <span className="w-10 h-[2px] bg-red" />
              <span className="font-bold">زاوية الضوء</span>
              <span className="text-text-dark-muted">/</span>
              <span className="font-bold">منذ 2007</span>
            </div>

            <h1 className="max-w-[720px] text-display font-extrabold leading-[1.16] tracking-tight text-white sm:text-h1 lg:text-display lg:leading-[1.14] xl:text-[80px]">
              {heroData.title}
            </h1>

            <p className="mt-6 max-w-[580px] text-body-lg text-text-dark-secondary sm:mt-8 lg:mt-10">
              {heroData.description}
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4 lg:mt-14">
              <Link
                href="/projects"
                className="btn-primary-lg group"
              >
                {heroData.button}
                <ArrowUpLeft size={22} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="btn-outline-dark h-14 px-8 text-lg">
                تعرّف على قدراتنا
              </Link>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-white/20 pt-6 text-caption text-text-dark-muted lg:absolute lg:bottom-10 lg:left-14 lg:mt-0 lg:border-0 lg:pt-0">
            <span className="text-red-bright font-bold">01</span>
            <span>تصميم · توريد · تصنيع · تنفيذ</span>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[460px] lg:min-h-[680px]">
          <Image
            src={heroData.image}
            alt="إنارة معمارية لمبنى في المساء"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className={`object-cover object-center transition duration-[1200ms] ${loaded ? "scale-100 opacity-100" : "scale-[1.04] opacity-70"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20 lg:bg-gradient-to-l lg:from-ink/50 lg:via-transparent lg:to-transparent" />
          <div className="absolute bottom-6 right-6 border-r-4 border-red bg-ink/90 px-5 py-4 text-right backdrop-blur-sm sm:bottom-10 sm:right-10 sm:px-6">
            <span className="block text-caption text-text-dark-secondary tracking-[0.1em]">LIGHTING / BUILT ENVIRONMENT</span>
            <span className="mt-2 block text-h4 font-bold text-white sm:text-h3">إنارة تخدم تفاصيل المكان</span>
          </div>
          <span className="absolute left-0 top-12 h-28 w-[4px] bg-red lg:top-20 lg:h-36" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}