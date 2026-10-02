"use client";

import Image from "next/image";

const mosaicImages = [
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.27 PM.jpeg",
    alt: "مشهد ليلي لمدخل مشروع بإضاءة معمارية متكاملة",
    caption: "مدخل يرحب بالضوء",
    className: "rounded-tl-[100px] rounded-br-[100px]",
    aspectRatio: "aspect-[4/5]",
    index: 1,
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.04 PM (1).jpeg",
    alt: "أعمدة إنارة على ممشى في مشروع سكني",
    caption: "مسارات مضاءة بأمان",
    className: "rounded-tr-[80px] rounded-bl-[80px]",
    aspectRatio: "aspect-[3/4]",
    index: 2,
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.21 PM (1).jpeg",
    alt: "تفاصيل فوانيس LED على أعمدة ديكورية",
    caption: "تقنية تختفي، ضوء يبقى",
    className: "rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[120px]",
    aspectRatio: "aspect-[5/4]",
    index: 3,
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.21 PM (5).jpeg",
    alt: "منظور جوي لمشروع إنارة طرقية متكامل",
    caption: "الصورة الكاملة من الأعلى",
    className: "rounded-bl-[100px] rounded-br-[100px]",
    aspectRatio: "aspect-[16/7]",
    index: 4,
  },
];

export default function MosaicImageGallery() {
  return (
    <section className="relative bg-dark-surface px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 text-center sm:mb-16 lg:max-w-[700px] lg:mx-auto">
          <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-white/55 sm:text-[13px]">
            <span className="h-[2px] w-8 bg-primary" /> 06 / من أرشيف الميدان
          </p>
          <h2 className="text-[34px] font-bold leading-[1.3] text-white sm:text-[44px] lg:text-[52px]">
            لحظات <span className="text-primary">مختارة</span>
          </h2>
          <p className="mt-5 max-w-[500px] mx-auto text-[15px] leading-[2] text-white/60 sm:text-[17px]">
            أربع لقطات من مواقع مختلفة، بأحجام وزوايا متنوعة — لتكتمل الصورة دون تكرار.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1.3fr_0.7fr] lg:gap-6">
            <div className="relative lg:row-span-2 group">
              <div className={`
                ${mosaicImages[0].className}
                ${mosaicImages[0].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.3)]
              `}>
                <Image
                  src={mosaicImages[0].src}
                  alt={mosaicImages[0].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute bottom-5 right-5 left-5 lg:bottom-8 lg:right-8 lg:left-8 bg-black/70 backdrop-blur-sm rounded-[12px] px-5 py-4 text-white">
                <span className="font-mono text-[11px] text-primary tracking-[0.16em] block mb-2">FIELD NOTES / 0{mosaicImages[0].index}</span>
                <h3 className="text-[18px] font-bold leading-[1.4] sm:text-[22px]">{mosaicImages[0].caption}</h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              <div className="relative group">
                <div className={`
                  ${mosaicImages[1].className}
                  ${mosaicImages[1].aspectRatio}
                  overflow-hidden bg-text-secondary
                  transition-all duration-700
                  group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)]
                `}>
                  <Image
                    src={mosaicImages[1].src}
                    alt={mosaicImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 28vw, 22vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="absolute bottom-3 right-3 left-3 bg-black/70 backdrop-blur-sm rounded-[10px] px-4 py-3 text-white">
                  <span className="font-mono text-[10px] text-primary tracking-[0.16em] block mb-1">FIELD NOTES / 0{mosaicImages[1].index}</span>
                  <h3 className="text-[15px] font-bold leading-[1.4]">{mosaicImages[1].caption}</h3>
                </div>
              </div>

              <div className="relative group">
                <div className={`
                  ${mosaicImages[2].className}
                  ${mosaicImages[2].aspectRatio}
                  overflow-hidden bg-text-secondary
                  transition-all duration-700
                  group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)]
                `}>
                  <Image
                    src={mosaicImages[2].src}
                    alt={mosaicImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 28vw, 22vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="absolute bottom-3 right-3 left-3 bg-black/70 backdrop-blur-sm rounded-[10px] px-4 py-3 text-white">
                  <span className="font-mono text-[10px] text-primary tracking-[0.16em] block mb-1">FIELD NOTES / 0{mosaicImages[2].index}</span>
                  <h3 className="text-[15px] font-bold leading-[1.4]">{mosaicImages[2].caption}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-8">
            <div className="relative group max-w-[1200px] mx-auto">
              <div className={`
                ${mosaicImages[3].className}
                ${mosaicImages[3].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.35)]
              `}>
                <Image
                  src={mosaicImages[3].src}
                  alt={mosaicImages[3].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[600px] px-4 bg-black/70 backdrop-blur-sm rounded-[12px] py-4 text-center text-white">
                <span className="font-mono text-[11px] text-primary tracking-[0.16em] block mb-2">FIELD NOTES / 0{mosaicImages[3].index}</span>
                <h3 className="text-[20px] font-bold leading-[1.4] sm:text-[24px]">{mosaicImages[3].caption}</h3>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-primary/30 hidden lg:block" aria-hidden="true" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}