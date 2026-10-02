"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.28 PM (5).jpeg",
    alt: "مشهد شامل لمشروع إنارة معمارية رئيسي",
    caption: "مشاريعنا الرائدة",
    className: "rounded-tl-[120px] rounded-br-[120px]",
    aspectRatio: "aspect-[4/3]",
    index: 1,
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.23 PM.jpeg",
    alt: "تفاصيل تنفيذ أعمدة إنارة ديكورية في مشروع سكني",
    caption: "التصميم والتنفيذ",
    className: "rounded-tr-[100px] rounded-bl-[100px]",
    aspectRatio: "aspect-[3/4]",
    index: 2,
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.01 PM (1).jpeg",
    alt: "منظور ليلي لمشروع إنارة طرقية متكامل",
    caption: "حلول إنارة متكاملة",
    className: "rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[160px] rounded-br-[20px]",
    aspectRatio: "aspect-[16/7]",
    index: 3,
  },
];

export default function CurvedGallery() {
  return (
    <section className="relative bg-background px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 text-center sm:mb-14 lg:max-w-[700px] lg:mx-auto">
          <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
            <span className="h-[2px] w-8 bg-red" /> 03 / لغة العمارة
          </p>
          <h2 className="text-[34px] font-bold leading-[1.3] text-text-primary sm:text-[44px] lg:text-[52px]">
            حيث تلتقي الهندسة بالجمال
          </h2>
          <p className="mt-5 max-w-[500px] mx-auto text-[15px] leading-[2] text-text-secondary sm:text-[17px]">
            ثلاث زوايا، قصة واحدة. كل صورة تعكس جانباً من فلسفة RAWASI في دمج الوظيفة بالشكل.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div className="relative group">
              <div className={`
                ${galleryImages[0].className}
                ${galleryImages[0].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)]
              `}>
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-5 text-right rtl:text-right ltr:text-left">
                <span className="font-mono text-[11px] text-accent tracking-[0.16em]">FIELD NOTES / 0{galleryImages[0].index}</span>
                <h3 className="mt-2 text-[20px] font-bold leading-[1.4] text-text-primary sm:text-[24px]">
                  {galleryImages[0].caption}
                </h3>
              </div>
            </div>

            <div className="relative group">
              <div className={`
                ${galleryImages[1].className}
                ${galleryImages[1].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)]
              `}>
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-5 text-right rtl:text-right ltr:text-left">
                <span className="font-mono text-[11px] text-accent tracking-[0.16em]">FIELD NOTES / 0{galleryImages[1].index}</span>
                <h3 className="mt-2 text-[20px] font-bold leading-[1.4] text-text-primary sm:text-[24px]">
                  {galleryImages[1].caption}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-12">
            <div className="relative group max-w-[900px] mx-auto">
              <div className={`
                ${galleryImages[2].className}
                ${galleryImages[2].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.18)]
              `}>
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 text-center">
                <span className="font-mono text-[11px] text-accent tracking-[0.16em]">FIELD NOTES / 0{galleryImages[2].index}</span>
                <h3 className="mt-2 text-[20px] font-bold leading-[1.4] text-text-primary sm:text-[24px]">
                  {galleryImages[2].caption}
                </h3>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-red/30 hidden lg:block" aria-hidden="true" />
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}