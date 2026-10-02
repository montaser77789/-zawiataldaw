"use client";

import Image from "next/image";

const editorialImages = [
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.25 PM (4).jpeg",
    alt: "مشهد ليلي واسع لمشروع إنارة معمارية",
    caption: "أثر الضوء على المشهد الحضري",
    description: "مشروع متكامل يغير ملامح المدينة ليلاً، حيث تتحول الطرق إلى شرايين ضوء تخدم الحركة وتبرز الهوية المعمارية.",
    className: "rounded-tl-[140px] rounded-br-[140px]",
    aspectRatio: "aspect-[16/9]",
    index: 1,
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.22 PM (1).jpeg",
    alt: "تركيب فوانيس LED عالية الكفاءة على أعمدة",
    caption: "الدقة في التفاصيل الهندسية",
    description: "كل نقطة اتصال، كل زاوية انحناء، كل تشطيب — مصممة لتحمل الزمن والعوامل، وتؤدي وظيفتها دون ضوضاء بصرية.",
    className: "rounded-tr-[100px] rounded-bl-[100px]",
    aspectRatio: "aspect-[3/4]",
    index: 2,
  },
  {
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.24 PM (2).jpeg",
    alt: "منظور واسع لموقع تنفيذ أعمال إنارة طرقية",
    caption: "الهندسة في بيئة العمل الحقيقية",
    description: "الموقع ليس مجرد مكان للتنفيذ، بل مختبر حي تختبر فيه التصاميم واقع الأرض، والظروف الجوية، ومتطلبات السلامة.",
    className: "rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[160px] rounded-br-[20px]",
    aspectRatio: "aspect-[21/9]",
    index: 3,
  },
];

export default function EditorialImageComposition() {
  return (
    <section className="relative bg-background px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 text-center sm:mb-16 lg:max-w-[700px] lg:mx-auto">
          <p className="mb-4 flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
            <span className="h-[2px] w-8 bg-primary" /> 03 / لغة العمارة
          </p>
          <h2 className="text-[34px] font-bold leading-[1.3] text-text-primary sm:text-[44px] lg:text-[52px]">
            ثلاث زوايا، <span className="text-primary">قصة واحدة</span>
          </h2>
          <p className="mt-5 max-w-[500px] mx-auto text-[15px] leading-[2] text-text-secondary sm:text-[17px]">
            كل صورة تعكس جانباً من فلسفتنا: التصميم يتشكل من الموقع، والتفاصيل تصنع الفرق، والتنفيذ هو الاختبار الحقيقي.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div className="relative group">
              <div className={`
                ${editorialImages[0].className}
                ${editorialImages[0].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.15)]
              `}>
                <Image
                  src={editorialImages[0].src}
                  alt={editorialImages[0].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6 text-right">
                <span className="font-mono text-[11px] text-primary tracking-[0.16em]">EDITORIAL / 0{editorialImages[0].index}</span>
                <h3 className="mt-3 text-[22px] font-bold leading-[1.4] text-text-primary sm:text-[26px]">
                  {editorialImages[0].caption}
                </h3>
                <p className="mt-3 max-w-[400px] text-[14px] leading-[1.9] text-text-secondary sm:text-[15px]">
                  {editorialImages[0].description}
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className={`
                ${editorialImages[1].className}
                ${editorialImages[1].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)]
              `}>
                <Image
                  src={editorialImages[1].src}
                  alt={editorialImages[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-5 text-right">
                <span className="font-mono text-[11px] text-primary tracking-[0.16em]">EDITORIAL / 0{editorialImages[1].index}</span>
                <h3 className="mt-2 text-[20px] font-bold leading-[1.4] text-text-primary sm:text-[24px]">
                  {editorialImages[1].caption}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.9] text-text-secondary sm:text-[15px]">
                  {editorialImages[1].description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14">
            <div className="relative group max-w-[1000px] mx-auto">
              <div className={`
                ${editorialImages[2].className}
                ${editorialImages[2].aspectRatio}
                overflow-hidden bg-text-secondary
                transition-all duration-700
                group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]
              `}>
                <Image
                  src={editorialImages[2].src}
                  alt={editorialImages[2].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>
              <div className="mt-6 text-center">
                <span className="font-mono text-[11px] text-primary tracking-[0.16em]">EDITORIAL / 0{editorialImages[2].index}</span>
                <h3 className="mt-3 text-[22px] font-bold leading-[1.4] text-text-primary sm:text-[26px]">
                  {editorialImages[2].caption}
                </h3>
                <p className="mt-3 max-w-[500px] mx-auto text-[14px] leading-[1.9] text-text-secondary sm:text-[15px]">
                  {editorialImages[2].description}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-primary/30 hidden lg:block" aria-hidden="true" />
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}