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
    <section className="section px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 text-center sm:mb-14 lg:max-w-[700px] lg:mx-auto">
          <p className="section-label is-centered justify-center">03 / لغة العمارة</p>
          <h2 className="section-title">
            ثلاث زوايا، <span className="text-accent">قصة واحدة</span>
          </h2>
          <p className="mt-5 max-w-[520px] mx-auto text-body text-text-secondary">
            كل صورة تعكس جانباً من فلسفتنا: التصميم يتشكل من الموقع، والتفاصيل تصنع الفرق، والتنفيذ هو الاختبار الحقيقي.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div className="relative group">
              <div className={`
                ${editorialImages[0].className}
                ${editorialImages[0].aspectRatio}
                overflow-hidden bg-surface
                transition-all duration-700
                group-hover:shadow-xl
              `}>
                <Image
                  src={editorialImages[0].src}
                  alt={editorialImages[0].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6">
                <span className="text-mono text-accent font-bold">EDITORIAL / 0{editorialImages[0].index}</span>
                <h3 className="mt-3 text-h4 font-bold text-text-primary">{editorialImages[0].caption}</h3>
                <p className="mt-3 max-w-[440px] text-body-sm text-text-secondary">{editorialImages[0].description}</p>
              </div>
            </div>

            <div className="relative group">
              <div className={`
                ${editorialImages[1].className}
                ${editorialImages[1].aspectRatio}
                overflow-hidden bg-surface
                transition-all duration-700
                group-hover:shadow-lg
              `}>
                <Image
                  src={editorialImages[1].src}
                  alt={editorialImages[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5">
                <span className="text-mono text-accent font-bold">EDITORIAL / 0{editorialImages[1].index}</span>
                <h3 className="mt-2 text-h4 font-bold text-text-primary">{editorialImages[1].caption}</h3>
                <p className="mt-2 text-body-sm text-text-secondary">{editorialImages[1].description}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14">
            <div className="relative group max-w-[1000px] mx-auto">
              <div className={`
                ${editorialImages[2].className}
                ${editorialImages[2].aspectRatio}
                overflow-hidden bg-surface
                transition-all duration-700
                group-hover:shadow-xl
              `}>
                <Image
                  src={editorialImages[2].src}
                  alt={editorialImages[2].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6 text-center">
                <span className="text-mono text-accent font-bold">EDITORIAL / 0{editorialImages[2].index}</span>
                <h3 className="mt-3 text-h4 font-bold text-text-primary">{editorialImages[2].caption}</h3>
                <p className="mt-3 max-w-[520px] mx-auto text-body-sm text-text-secondary">{editorialImages[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}