"use client";

import Image from "next/image";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { ArrowUpLeft } from "lucide-react";
import { solutions } from "../data/heroData";

export default function LightingSolutions() {
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <section className="border-y border-border bg-[#e6e3dc] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-9 grid gap-5 sm:mb-12 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]"><span className="h-[2px] w-8 bg-primary" /> مواصفات الإنارة / 05</p>
            <h2 className="max-w-[780px] text-[34px] font-bold leading-[1.3] text-text-primary sm:text-[46px] lg:text-[58px]">تفاصيل الحل تبدأ من طبيعة الموقع</h2>
          </div>
          <p className="max-w-[500px] text-[15px] leading-[1.9] text-text-secondary sm:text-[16px]">تعرّف على بعض مجالات التجهيز والتنفيذ الواردة ضمن حلول زاوية الضوء.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-9">
          <div className="order-2 flex flex-col lg:order-1">
            <p className="mb-2 text-[11px] text-text-secondary lg:hidden">اسحب لاستعراض الخيارات</p>
            <div className="flex gap-2 overflow-x-auto pb-3 lg:block lg:pb-0">
              {solutions.map((item, index) => (
                <button key={item.id} type="button" onClick={() => setActive(index)} aria-pressed={active === index} className={`flex min-w-[230px] items-center gap-4 border-b px-3 py-4 text-right transition sm:min-w-[270px] lg:min-w-0 lg:px-0 lg:py-[17px] ${active === index ? "border-primary text-text-primary" : "border-black/15 text-text-secondary hover:text-black"}`}>
                  <span className={`font-mono text-[11px] ${active === index ? "text-primary" : "text-text-secondary/70"}`}>0{index + 1}</span>
                  <span className="flex-1 text-[14px] font-semibold sm:text-[15px]">{item.button}</span>
                  <ArrowUpLeft size={17} className={`shrink-0 ${active === index ? "text-primary" : "opacity-40"}`} />
                </button>
              ))}
            </div>
            <div className="mt-7 sm:mt-9">
              <h3 className="text-[25px] font-bold leading-[1.4] text-text-primary sm:text-[32px] lg:text-[38px]">{current.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.9] text-text-secondary sm:text-[16px]">{current.description}</p>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 sm:mt-7">
                {current.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-[13px] leading-[1.7] text-text-primary sm:text-[14px]"><BsCheckLg className="mt-1 shrink-0 text-primary" />{feature}</li>)}
              </ul>
            </div>
          </div>

          <div className="relative order-1 min-h-[330px] overflow-hidden bg-dark-surface sm:min-h-[500px] lg:order-2 lg:min-h-[640px]">
            <Image key={current.image} src={current.image} alt={current.title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition-opacity duration-500" />
            <span className="absolute right-0 top-0 h-14 w-14 bg-primary" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
            <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-2 font-mono text-[11px] text-white sm:bottom-6 sm:left-6">ZA / TECHNICAL SERIES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
