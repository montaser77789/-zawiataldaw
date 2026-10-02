"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

export default function FeaturedImage() {
  return (
    <section className="relative overflow-hidden bg-ink px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:gap-16 xl:gap-24">
        <div className="order-2 lg:order-1">
          <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-white/55 sm:text-[13px]">
            <span className="h-[2px] w-8 bg-red" /> 06 / مشروع مميز
          </p>
          <h2 className="max-w-[520px] text-[34px] font-bold leading-[1.3] text-white sm:text-[44px] lg:text-[52px]">
            مشروع أمانة حفر الباطن — <span className="text-red-bright">إنارة تخدم المدينة</span>
          </h2>
          <p className="mt-6 max-w-[480px] text-[15px] leading-[2] text-white/70 sm:text-[17px]">
            مشروع شامل لإنارة الطرق والمساحات العامة في أمانة حفر الباطن، يشمل توريد وتركيب أعمدة الإنارة وأنظمة LED عالية الكفاءة بمعايير عالمية.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/projects/hafr-albatin"
              className="group inline-flex h-14 items-center gap-5 bg-red px-6 text-[15px] font-semibold text-white transition hover:bg-white hover:text-black sm:h-16 sm:px-8"
            >
              استكشف تفاصيل المشروع
              <ArrowUpLeft size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative order-1 min-h-[480px] lg:order-2 lg:min-h-[680px]">
          <div className="relative h-full min-h-[480px] overflow-hidden rounded-tl-[140px] rounded-br-[40px] rounded-bl-[20px] rounded-tr-[20px] bg-text-secondary lg:min-h-[680px]">
            <Image
              src="/images/WhatsApp Image 2026-09-29 at 12.17.28 PM (5).jpeg"
              alt="مشروع أمانة حفر الباطن - إنارة طرقية ومساحات عامة شاملة"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
            <span className="absolute top-0 right-0 h-24 w-24 bg-red" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
            <span className="absolute bottom-0 left-0 h-16 w-16 bg-red/50" style={{ clipPath: "polygon(100% 100%,0 100%,100% 0)" }} aria-hidden="true" />
            <div className="absolute bottom-6 right-6 border-r-2 border-red bg-black/55 px-4 py-3 text-right backdrop-blur-sm sm:bottom-8 sm:right-8 sm:px-5">
              <span className="block text-[10px] font-medium tracking-[0.12em] text-white/60">FEATURED PROJECT / 01</span>
              <span className="mt-1 block text-[14px] font-semibold text-white sm:text-[16px]">مشروع أمانة حفر الباطن</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}