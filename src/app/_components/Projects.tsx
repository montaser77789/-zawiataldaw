"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "../data/heroData";

export default function Projects() {
  return (
    <section className="overflow-hidden bg-[#e6e3dc] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-12 lg:mb-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
              <span className="h-[2px] w-8 bg-primary" /> 02 / من الميدان
            </p>
            <h2 className="text-[34px] font-bold leading-tight text-text-primary sm:text-[46px] lg:text-[60px]">أعمالٌ على أرض الواقع</h2>
          </div>
          <Link href="/projects" className="hidden items-center gap-3 border-b border-black/30 pb-2 text-[14px] font-semibold transition hover:border-primary hover:text-primary sm:inline-flex">
            كل المشاريع <ArrowUpLeft size={18} />
          </Link>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 5200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          spaceBetween={14}
          slidesPerView={1.03}
          breakpoints={{ 700: { slidesPerView: 1.08, spaceBetween: 22 } }}
          dir="rtl"
          className="project-story-swiper"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Link href={`/projects/${item.slug}`} className="group grid overflow-hidden bg-dark-surface text-white lg:min-h-[530px] lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative order-2 min-h-[330px] overflow-hidden sm:min-h-[440px] lg:order-1 lg:min-h-[530px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-black/20 lg:to-transparent" />
                  <span className="absolute left-5 top-5 font-mono text-[12px] text-white/70 sm:left-8 sm:top-8">ZA / 0{index + 1}</span>
                </div>
                <div className="relative order-1 flex flex-col justify-center px-6 py-10 sm:px-10 lg:order-2 lg:px-12 xl:px-16">
                  <span className="absolute right-0 top-0 h-14 w-14 bg-primary" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
                  <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-white/55 sm:text-[13px]">
                    <span>{item.year}</span><span>{item.location}</span>
                  </div>
                  <h3 className="max-w-[560px] text-[30px] font-bold leading-[1.35] sm:text-[40px] lg:text-[50px]">{item.title}</h3>
                  <p className="mt-5 max-w-[570px] text-[15px] leading-[1.9] text-white/65 sm:text-[17px] lg:mt-7">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-3 text-[14px] font-semibold transition group-hover:border-primary group-hover:text-white lg:mt-10">
                    استكشف تفاصيل المشروع <ArrowUpLeft size={18} className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 flex items-center justify-between sm:hidden">
          <Link href="/projects" className="inline-flex items-center gap-3 border-b border-black/30 pb-2 text-[14px] font-semibold">
            كل المشاريع <ArrowUpLeft size={18} />
          </Link>
          <span className="text-[11px] text-text-secondary">اسحب لاستعراض الأعمال</span>
        </div>
      </div>
    </section>
  );
}
