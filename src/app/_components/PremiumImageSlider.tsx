"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderImages = [
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.28 PM (5).jpeg",
    alt: "مشهد ليلي لمشروع إنارة معمارية رئيسي",
    category: "مشاريع رائدة",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.01 PM (1).jpeg",
    alt: "منظور جوي لمشروع إنارة متكامل",
    category: "مشاريعنا",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.28 PM (4).jpeg",
    alt: "تفاصيل تنفيذ أعمدة إنارة ديكورية",
    category: "التصميم الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.23 PM.jpeg",
    alt: "إنارة ممرات وحدائق في مشروع سكني",
    category: "حلول هندسية",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.04 PM (2).jpeg",
    alt: "أعمدة إنارة على طريق رئيسي عند الغروب",
    category: "مشاريع طرقية",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.20 PM (5).jpeg",
    alt: "محطة كهربائية فرعية للمشروع",
    category: "الإشراف الهندسي",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.16.59 PM (1).jpeg",
    alt: "مشهد ليلي لمشروع إنارة حضري واسع",
    category: "حلول متكاملة",
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.16.57 PM (2).jpeg",
    alt: "فريق هندسي في موقع العمل",
    category: "التنفيذ الميداني",
  },
];

export default function PremiumImageSlider() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="section-header flex items-end justify-between gap-6">
          <div>
            <p className="section-label">02 / منظورنا</p>
            <h2 className="section-title">أعمالٌ تُرى بالعين</h2>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-caption text-text-primary font-semibold">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              اسحب للتنقل
            </span>
            <span className="h-px w-16 bg-accent/40" />
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={true}
            breakpoints={{
              480: { slidesPerView: 1.15, spaceBetween: 16 },
              640: { slidesPerView: 1.25, spaceBetween: 20 },
              768: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 1.8, spaceBetween: 24 },
              1280: { slidesPerView: 2.2, spaceBetween: 28 },
              1440: { slidesPerView: 2.5, spaceBetween: 32 },
            }}
            dir="rtl"
            className="swiper-custom overflow-hidden"
            grabCursor={true}
            speed={700}
          >
            {sliderImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface sm:aspect-[3/2] lg:aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 480px) 92vw, (max-width: 768px) 55vw, (max-width: 1024px) 40vw, (max-width: 1280px) 32vw, 24vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 transition-all duration-500 sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="badge bg-red text-white">{item.category}</span>
                      <span className="text-mono text-white">ZA / {String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 hidden sm:block text-center">
            <p className="text-caption text-text-secondary font-medium">
              {sliderImages.length} مشروعًا حقيقيًا — اسحب أو استخدم الأسهم للاستكشاف
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}