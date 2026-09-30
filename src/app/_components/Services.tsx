"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpLeft } from "lucide-react";
import { services } from "../data/heroData";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = services[activeIndex];

  return (
    <section className="overflow-hidden bg-dark-surface px-3 py-16 text-white sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-white/55 sm:text-[13px]">
              <span className="h-[2px] w-8 bg-primary" /> 04 / قدراتنا
            </p>
            <h2 className="max-w-[720px] text-[34px] font-bold leading-[1.3] sm:text-[46px] lg:text-[58px]">من التخطيط إلى آخر نقطة ضوء</h2>
          </div>
          <p className="max-w-[460px] text-[15px] leading-[1.9] text-white/60 sm:text-[16px]">
            نطاق متكامل لأعمال الإنارة، تتغير تفاصيله بحسب حاجة المشروع وموقعه.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="mb-4 hidden items-center justify-between border-b border-white/20 pb-3 text-[11px] text-white/45 sm:flex">
              <span>اختر مجال العمل</span><span>0{services.length}</span>
            </div>
            <p className="mb-2 text-[11px] text-white/40 lg:hidden">اسحب لاستعراض بقية المجالات</p>
            <div className="flex gap-2 overflow-x-auto pb-3 lg:block lg:overflow-visible lg:pb-0">
              {services.map((service, index) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                  className={`group flex min-w-[230px] items-center gap-4 border-b px-3 py-4 text-right transition sm:min-w-[260px] lg:min-w-0 lg:gap-5 lg:px-0 lg:py-[17px] ${activeIndex === index ? "border-primary text-white" : "border-white/15 text-white/50 hover:text-white/85"}`}
                >
                  <span className={`font-mono text-[11px] ${activeIndex === index ? "text-primary" : "text-white/35"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-[14px] font-semibold sm:text-[15px]">{service.title}</span>
                  <ArrowUpLeft size={17} className={`shrink-0 transition ${activeIndex === index ? "text-primary" : "opacity-0 group-hover:opacity-100"}`} />
                </button>
              ))}
            </div>
          </div>

          <article className="group relative order-1 min-h-[440px] overflow-hidden bg-black sm:min-h-[520px] lg:order-2 lg:min-h-[650px]">
            <Image
              key={current.slug}
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            <span className="absolute right-0 top-0 h-20 w-20 bg-primary" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
            <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-9 lg:p-12">
              <span className="font-mono text-[12px] text-primary">CAPABILITY / {String(activeIndex + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 max-w-[650px] text-[28px] font-bold leading-[1.35] sm:text-[36px] lg:text-[44px]">{current.title}</h3>
              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.9] text-white/75 sm:text-[16px]">{current.description}</p>
              <Link href={`/services/${current.slug}`} className="group/link mt-7 inline-flex items-center gap-3 border-b border-white/40 pb-3 text-[14px] font-semibold transition hover:border-primary sm:mt-9">
                تفاصيل الخدمة <ArrowUpLeft size={18} className="text-primary transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
