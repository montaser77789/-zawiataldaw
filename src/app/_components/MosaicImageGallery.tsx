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
    <section className="overflow-hidden bg-ink px-4 py-16 sm:px-6 sm:py-20 lg:py-28 xl:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 text-center sm:mb-14 lg:max-w-[700px] lg:mx-auto">
          <p className="section-label is-centered justify-center">06 / من أرشيف الميدان</p>
          <h2 className="section-title-light">
            لحظات <span className="text-red-bright">مختارة</span>
          </h2>
          <p className="mt-5 max-w-[520px] mx-auto text-body text-text-dark-secondary">
            أربع لقطات من مواقع مختلفة، بأحجام وزوايا متنوعة — لتكتمل الصورة دون تكرار.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1.3fr_0.7fr] lg:gap-6">
            <div className="relative lg:row-span-2 group">
              <div className={`
                ${mosaicImages[0].className}
                ${mosaicImages[0].aspectRatio}
                overflow-hidden bg-ink-lighter
                transition-all duration-700
              `}>
                <Image
                  src={mosaicImages[0].src}
                  alt={mosaicImages[0].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-mono text-red-bright font-bold">FIELD / 0{mosaicImages[0].index}</span>
                <span className="h-px flex-1 bg-white/15" />
                <span className="text-body-sm font-semibold text-white">{mosaicImages[0].caption}</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              <div className="relative group">
                <div className={`
                  ${mosaicImages[1].className}
                  ${mosaicImages[1].aspectRatio}
                  overflow-hidden bg-ink-lighter
                  transition-all duration-700
                `}>
                  <Image
                    src={mosaicImages[1].src}
                    alt={mosaicImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 28vw, 22vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-mono text-red-bright font-bold">0{mosaicImages[1].index}</span>
                  <span className="text-caption font-semibold text-text-dark-secondary">{mosaicImages[1].caption}</span>
                </div>
              </div>

              <div className="relative group">
                <div className={`
                  ${mosaicImages[2].className}
                  ${mosaicImages[2].aspectRatio}
                  overflow-hidden bg-ink-lighter
                  transition-all duration-700
                `}>
                  <Image
                    src={mosaicImages[2].src}
                    alt={mosaicImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 28vw, 22vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-mono text-red-bright font-bold">0{mosaicImages[2].index}</span>
                  <span className="text-caption font-semibold text-text-dark-secondary">{mosaicImages[2].caption}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-10">
            <div className="relative group max-w-[1200px] mx-auto">
              <div className={`
                ${mosaicImages[3].className}
                ${mosaicImages[3].aspectRatio}
                overflow-hidden bg-ink-lighter
                transition-all duration-700
              `}>
                <Image
                  src={mosaicImages[3].src}
                  alt={mosaicImages[3].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-mono text-red-bright font-bold">FIELD / 0{mosaicImages[3].index}</span>
                <h3 className="mt-2 text-h4 font-bold text-white">{mosaicImages[3].caption}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}