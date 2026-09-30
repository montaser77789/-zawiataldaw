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
    <section className="px-3 pb-7 pt-3 sm:px-5 lg:pb-10 lg:pt-5">
      <div className="mx-auto grid max-w-[1600px] overflow-hidden bg-dark-surface text-white lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex min-h-[440px] flex-col justify-center px-6 py-12 sm:px-10 lg:min-h-[650px] lg:px-14 xl:px-20">
          <div className="absolute right-0 top-0 h-20 w-20 bg-primary" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} aria-hidden="true" />
          <div className="relative">
            <div className="mb-8 flex items-center gap-3 text-[12px] font-semibold tracking-[0.14em] text-white/55 sm:text-[13px]">
              <span className="h-[2px] w-9 bg-primary" />
              <span>زاوية الضوء</span>
              <span className="text-white/30">/</span>
              <span>منذ 2007</span>
            </div>

            <h1 className="max-w-[670px] text-[42px] font-bold leading-[1.28] sm:text-[54px] lg:text-[68px] xl:text-[78px]">
              {heroData.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[2] text-white/70 sm:text-[18px] lg:mt-8 lg:text-[20px]">
              {heroData.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-12">
              <Link
                href="/projects"
                className="group inline-flex h-14 items-center gap-5 bg-primary px-6 text-[15px] font-semibold text-white transition hover:bg-white hover:text-black sm:h-16 sm:px-8"
              >
                {heroData.button}
                <ArrowUpLeft size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="text-[14px] text-white/65 underline decoration-white/25 underline-offset-8 transition hover:text-white">
                تعرّف على قدراتنا
              </Link>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-5 text-[11px] uppercase tracking-[0.17em] text-white/45 lg:absolute lg:bottom-8 lg:left-10 lg:mt-0 lg:border-0 lg:pt-0">
            <span className="text-primary">01</span>
            <span>تصميم · توريد · تصنيع · تنفيذ</span>
          </div>
        </div>

        <div className="relative min-h-[330px] overflow-hidden sm:min-h-[460px] lg:min-h-[650px]">
          <Image
            src={heroData.image}
            alt="إنارة معمارية لمبنى في المساء"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className={`object-cover object-center transition duration-[1200ms] ${loaded ? "scale-100 opacity-100" : "scale-[1.04] opacity-70"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 lg:bg-gradient-to-l lg:from-black/30 lg:via-transparent lg:to-transparent" />
          <div className="absolute bottom-5 right-5 border-r-2 border-primary bg-black/55 px-4 py-3 text-right backdrop-blur-sm sm:bottom-8 sm:right-8 sm:px-5">
            <span className="block text-[10px] font-medium tracking-[0.12em] text-white/60">LIGHTING / BUILT ENVIRONMENT</span>
            <span className="mt-1 block text-[14px] font-semibold text-white sm:text-[16px]">إنارة تخدم تفاصيل المكان</span>
          </div>
          <span className="absolute left-0 top-10 h-24 w-[3px] bg-primary lg:top-16 lg:h-32" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
