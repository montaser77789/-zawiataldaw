import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { aboutContent } from "@/data/about";
import { clients } from "@/app/data/heroData";

export const metadata = {
  title: "عن زاوية الضوء",
  description: "تعرف على رؤية ومجالات عمل زاوية الضوء في الإنارة والمشاريع الكهربائية.",
};

export default function AboutPage() {
  const { hero, intro, stats, vision, mission, partners, excellence, gallery } = aboutContent;

  return (
    <article>
      <section className="grid bg-dark-surface text-white lg:min-h-[570px] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative order-2 min-h-[320px] lg:order-1 lg:min-h-[570px]">
          <Image src={hero.image} alt="أعمدة إنارة على ممشى في المساء" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
          <span className="absolute bottom-0 right-0 h-16 w-16 bg-primary" style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }} aria-hidden="true" />
        </div>
        <div className="relative order-1 flex flex-col justify-center px-5 py-14 sm:px-9 lg:order-2 lg:px-14 lg:py-20 xl:px-20">
          <span className="absolute right-0 top-0 h-16 w-16 bg-primary" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-white/55 sm:text-[13px]"><span className="h-[2px] w-8 bg-primary" /> زاوية الضوء / من نحن</p>
          <h1 className="text-[40px] font-bold leading-[1.3] sm:text-[56px] lg:text-[68px]">إنارةٌ تُكمل حكاية المكان</h1>
          <p className="mt-6 max-w-[660px] text-[16px] leading-[2] text-white/70 sm:text-[18px] lg:mt-8 lg:text-[20px]">{intro}</p>
          <span className="mt-9 border-r-2 border-primary pr-4 text-[14px] text-white/65">{hero.subtitle}</span>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-7 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((item, index) => (
            <div key={item.label} className="flex items-center gap-5 py-5 sm:justify-center sm:px-5 sm:py-7 lg:gap-7 lg:py-9">
              <span className="font-mono text-[12px] text-primary">0{index + 1}</span>
              <div className="flex items-baseline gap-3 sm:flex-col sm:gap-1">
                <span className="text-[34px] font-bold text-text-primary sm:text-[40px] lg:text-[50px]">{item.value}</span>
                <span className="text-[13px] text-text-secondary sm:text-[14px]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-7 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <div className="relative min-h-[350px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
            <Image src={vision.image} alt="إنارة ممرات ومساحات عامة" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <span className="absolute bottom-0 left-0 h-20 w-20 bg-primary" style={{ clipPath: "polygon(0 0,0 100%,100% 100%)" }} aria-hidden="true" />
          </div>
          <div>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]"><span className="h-[2px] w-8 bg-primary" /> رؤيتنا / 01</p>
            <h2 className="text-[34px] font-bold leading-[1.32] text-text-primary sm:text-[46px] lg:text-[56px]">{vision.title}</h2>
            <p className="mt-6 text-[16px] leading-[2] text-text-secondary sm:text-[18px] lg:mt-8">{vision.text}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-7 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-4 sm:grid-cols-6 sm:grid-rows-[240px_180px] lg:grid-rows-[340px_250px]">
          {gallery.map((src, index) => {
            const layout = ["sm:col-span-4 sm:row-span-2", "sm:col-span-2", "sm:col-span-2", "sm:col-span-2"];
            return (
              <div key={src} className={`relative min-h-[190px] overflow-hidden ${layout[index] ?? "sm:col-span-2"}`}>
                <Image src={src} alt={`مشهد من أعمال الإنارة ${index + 1}`} fill sizes="(max-width: 640px) 100vw, 65vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
                {index === 0 && <span className="absolute bottom-4 right-4 bg-black/65 px-3 py-2 font-mono text-[11px] text-white">LIGHT IN CONTEXT / 01</span>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-dark-surface px-4 py-14 text-white sm:px-7 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div className="order-2 relative min-h-[310px] lg:order-1 lg:min-h-[500px]">
            <Image src={mission.image} alt="عمود إنارة ديكوري في موقع مفتوح" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <span className="absolute right-0 top-0 h-14 w-14 bg-primary" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-white/55 sm:text-[13px]"><span className="h-[2px] w-8 bg-primary" /> مهمتنا / 02</p>
            <h2 className="text-[34px] font-bold leading-[1.32] sm:text-[46px] lg:text-[56px]">{mission.title}</h2>
            <p className="mt-6 max-w-[660px] text-[16px] leading-[2] text-white/70 sm:text-[18px] lg:mt-8">{mission.text}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-[12px] font-semibold sm:mt-10 sm:gap-4 sm:text-[13px]">
              {["التصميم والتصنيع", "التوريد والتركيب", "الصيانة"].map((item) => <span key={item} className="border border-white/20 px-4 py-3">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-7 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[460px]">
            <Image src={partners.image} alt="أعمدة إنارة في ساحة عامة" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]"><span className="h-[2px] w-8 bg-primary" /> علاقات العمل / 03</p>
            <h2 className="text-[32px] font-bold leading-[1.35] text-text-primary sm:text-[44px] lg:text-[52px]">{partners.title}</h2>
            <p className="mt-5 text-[15px] leading-[2] text-text-secondary sm:text-[17px]">{partners.text}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">
              {clients.map((client) => (
                <div key={client.id} className="flex min-h-[100px] items-center justify-center bg-white px-3 py-3 sm:min-h-[125px]">
                  <div className="relative h-[70px] w-[120px] sm:h-[90px] sm:w-[150px]"><Image src={client.image} alt={client.alt} fill sizes="150px" className="object-contain" /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 mb-16 border-y border-border bg-surface px-5 py-10 sm:mx-7 sm:px-8 lg:mx-10 lg:mb-24 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-12">
        <div>
          <p className="mb-3 text-[12px] font-semibold tracking-[0.12em] text-primary">زاوية الضوء / 04</p>
          <h2 className="text-[27px] font-bold leading-[1.4] text-text-primary sm:text-[34px]">{excellence.title}</h2>
          <p className="mt-3 max-w-[760px] text-[14px] leading-[1.9] text-text-secondary sm:text-[16px]">{excellence.text}</p>
        </div>
        <Link href="/contact" className="mt-6 inline-flex h-14 shrink-0 items-center gap-5 bg-primary px-6 text-[14px] font-semibold text-white transition hover:bg-dark-surface lg:mt-0 lg:mr-10">
          تواصل معنا <ArrowUpLeft size={18} />
        </Link>
      </section>
    </article>
  );
}
