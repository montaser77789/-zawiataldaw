"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const showcaseImages = [
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.01 PM (1).jpeg",
    alt: "مشروع إنارة معمارية لمبنى تجاري",
    caption: "مشاريعنا",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.28 PM (5).jpeg",
    alt: "تصميم هندسي لأعمدة إنارة ديكورية",
    caption: "التصميم الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.28 PM (4).jpeg",
    alt: "موقع تنفيذ أعمال إنارة طرقية",
    caption: "الإشراف الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.23 PM.jpeg",
    alt: "إنارة ممرات وحدائق في مشروع سكني",
    caption: "حلول هندسية متكاملة",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.21 PM (1).jpeg",
    alt: "أعمدة إنارة على طريق سريع",
    caption: "مشاريعنا",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.22 PM (1).jpeg",
    alt: "تركيب فوانيس LED عالية الكفاءة",
    caption: "التصميم الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.20 PM (5).jpeg",
    alt: "محطة كهربائية فرعية للمشروع",
    caption: "الإشراف الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.24 PM (2).jpeg",
    alt: "مشهد ليلي لمشروع إنارة حضري",
    caption: "حلول هندسية متكاملة",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.25 PM (4).jpeg",
    alt: "تفاصيل تركيب أعمدة إنارة ديكورية",
    caption: "مشاريعنا",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.20 PM (7).jpeg",
    alt: "فريق هندسي في موقع العمل",
    caption: "التصميم الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.21 PM (5).jpeg",
    alt: "اختبار أنظمة الإنارة قبل التسليم",
    caption: "الإشراف الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.21 PM (2).jpeg",
    alt: "منظور جوي لمشروع إنارة متكامل",
    caption: "حلول هندسية متكاملة",
  },
];

export default function ImageShowcase() {
  return (
    <section className="overflow-hidden bg-background px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-12 lg:mb-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
              <span className="h-[2px] w-8 bg-primary" /> 02 / من الميدان
            </p>
            <h2 className="text-[34px] font-bold leading-tight text-text-primary sm:text-[46px] lg:text-[60px]">
              أعمالٌ على أرض الواقع
            </h2>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            breakpoints={{
              480: { slidesPerView: 1.2, spaceBetween: 16 },
              768: { slidesPerView: 1.4, spaceBetween: 20 },
              1024: { slidesPerView: 1.8, spaceBetween: 24 },
              1280: { slidesPerView: 2.2, spaceBetween: 28 },
              1440: { slidesPerView: 2.5, spaceBetween: 32 },
            }}
            dir="rtl"
            className="showcase-swiper"
            grabCursor={true}
          >
            {showcaseImages.map((item, index) => (
              <SwiperSlide key={index} className="showcase-slide">
                <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 480px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 38vw, (max-width: 1280px) 30vw, 25vw"
                    className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-white bg-primary/90 backdrop-blur-sm">
                      {item.caption}
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 font-mono text-[11px] text-white/70">ZA / {String(index + 1).padStart(2, "0")}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 hidden sm:block text-center">
            <p className="text-[12px] text-text-secondary font-medium tracking-[0.08em]">
              اسحب لاستكشاف المزيد من المشاريع
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}