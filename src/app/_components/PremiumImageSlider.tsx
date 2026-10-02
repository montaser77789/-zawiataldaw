"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper/modules";
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
    <section className="overflow-hidden bg-background px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-7 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14 lg:mb-16">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
              <span className="h-[2px] w-8 bg-primary" /> 02 / منظورنا
            </p>
            <h2 className="text-[34px] font-bold leading-tight text-text-primary sm:text-[46px] lg:text-[60px]">
              أعمالٌ تُرى بالعين
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-[12px] text-text-secondary font-medium">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              اسحب للتنقل
            </span>
            <span className="h-px w-16 bg-primary/30" />
            <span className="flex items-center gap-2">
              أو استخدم الأسهم
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, FreeMode]}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={true}
            pagination={{ clickable: true, renderBullet: (index, className) => `<span class="${className}"></span>` }}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={true}
            freeMode={{ enabled: true, sticky: true }}
            breakpoints={{
              480: { slidesPerView: 1.15, spaceBetween: 16, centeredSlides: true },
              640: { slidesPerView: 1.25, spaceBetween: 20, centeredSlides: true },
              768: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true },
              1024: { slidesPerView: 1.8, spaceBetween: 24, centeredSlides: true },
              1280: { slidesPerView: 2.2, spaceBetween: 28, centeredSlides: true },
              1440: { slidesPerView: 2.5, spaceBetween: 32, centeredSlides: true },
              1600: { slidesPerView: 2.8, spaceBetween: 32, centeredSlides: true },
            }}
            dir="rtl"
            className="premium-swiper"
            grabCursor={true}
            speed={700}
          >
            {sliderImages.map((item, index) => (
              <SwiperSlide key={index} className="premium-slide">
                <article className="group relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] overflow-hidden bg-text-secondary transition-all duration-700">
                  <div className="absolute inset-0 overflow-hidden rounded-[16px] sm:rounded-[20px]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 480px) 92vw, (max-width: 768px) 55vw, (max-width: 1024px) 40vw, (max-width: 1280px) 32vw, (max-width: 1440px) 28vw, 24vw"
                      className="object-cover object-center transition-all duration-1000 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <span className="inline-block px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-white bg-primary/95 backdrop-blur-sm border border-primary/30">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="w-6 h-px bg-primary" />
                    <span className="font-mono text-[11px] text-white/90 tracking-[0.16em]">ZA / {String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <span className="font-mono text-[10px] text-white/70 tracking-[0.1em]">مشروع حقيقي</span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx>{`
            .premium-swiper .swiper-button-next,
            .premium-swiper .swiper-button-prev {
              width: 56px;
              height: 56px;
              background: rgba(22, 22, 22, 0.85);
              border: 1px solid rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              color: white;
              transition: all 0.3s ease;
            }
            .premium-swiper .swiper-button-next:hover,
            .premium-swiper .swiper-button-prev:hover {
              background: var(--primary);
              border-color: var(--primary);
              transform: scale(1.05);
            }
            .premium-swiper .swiper-button-next:after,
            .premium-swiper .swiper-button-prev:after {
              font-size: 20px;
              font-weight: 700;
            }
            .premium-swiper .swiper-pagination {
              bottom: -50px !important;
              display: flex !important;
              justify-content: center;
              gap: 8px;
            }
            .premium-swiper .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              border-radius: 0;
              background: rgba(255, 255, 255, 0.3);
              opacity: 1;
              transition: all 0.3s ease;
              border: 1px solid transparent;
            }
            .premium-swiper .swiper-pagination-bullet-active {
              width: 32px;
              background: var(--primary);
              border-color: var(--primary);
            }
            @media (max-width: 1024px) {
              .premium-swiper .swiper-button-next,
              .premium-swiper .swiper-button-prev {
                display: none !important;
              }
            }
          `}</style>

          <div className="mt-8 hidden sm:block text-center">
            <p className="text-[12px] text-text-secondary font-medium tracking-[0.08em]">
              {sliderImages.length} مشروعًا حقيقيًا — اسحب أو استخدم الأسهم للاستكشاف
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}