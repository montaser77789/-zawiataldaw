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
    <section className="overflow-hidden bg-ink px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-28 xl:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="section-header flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="section-label on-dark">04 / قدراتنا</p>
            <h2 className="section-title-light">من التخطيط إلى آخر نقطة ضوء</h2>
          </div>
          <p className="section-description-light max-w-[460px]">
            نطاق متكامل لأعمال الإنارة، تتغير تفاصيله بحسب حاجة المشروع وموقعه.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="mb-4 hidden items-center justify-between border-b border-white/20 pb-3 text-caption text-text-dark-muted sm:flex">
              <span>اختر مجال العمل</span>
              <span className="font-mono text-red-bright">0{services.length}</span>
            </div>
            <p className="mb-2 text-caption text-text-dark-muted lg:hidden">اسحب لاستعراض بقية المجالات</p>
            <div className="flex gap-2 overflow-x-auto pb-3 lg:block lg:overflow-visible lg:pb-0">
              {services.map((service, index) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                  className={`group flex min-w-[230px] items-center gap-4 border-b px-3 py-4 text-right transition-all sm:min-w-[260px] lg:min-w-0 lg:gap-5 lg:px-0 lg:py-[17px] ${activeIndex === index ? "border-red text-white" : "border-white/10 text-text-dark-muted hover:border-red/40 hover:text-text-dark-secondary"}`}
                >
                  <span className={`text-mono font-bold ${activeIndex === index ? "text-red-bright" : "text-text-dark-muted"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-body-sm font-semibold">{service.title}</span>
                  <ArrowUpLeft size={18} className={`shrink-0 transition-all ${activeIndex === index ? "text-red-bright" : "opacity-0 group-hover:opacity-100"}`} />
                </button>
              ))}
            </div>
          </div>

          <article className="group relative order-1 min-h-[440px] overflow-hidden bg-ink-lighter sm:min-h-[520px] lg:order-2 lg:min-h-[650px]">
            <Image
              key={current.slug}
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
            <span className="absolute right-0 top-0 h-24 w-24 bg-red/20" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
            <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-9 lg:p-12">
              <span className="text-mono text-red-bright font-bold">CAPABILITY / {String(activeIndex + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 max-w-[650px] text-h3 text-white">{current.title}</h3>
              <p className="mt-4 max-w-[650px] text-body-sm text-text-dark-secondary sm:text-body">{current.description}</p>
              <Link href={`/services/${current.slug}`} className="group/link mt-7 inline-flex items-center gap-3 border-b border-red/40 pb-3 text-body-sm font-semibold text-white transition-colors hover:border-red sm:mt-9">
                تفاصيل الخدمة
                <ArrowUpLeft size={18} className="text-red-bright transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}