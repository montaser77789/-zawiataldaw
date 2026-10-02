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
      <section className="grid bg-ink text-white lg:min-h-[570px] lg:grid-cols-[0.85fr_1.15fr]">
        <figure className="relative order-2 min-h-[340px] lg:order-1 lg:min-h-[570px]">
          <Image
            src={hero.image}
            alt="أعمدة إنارة على ممشى في المساء"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </figure>

        <div className="relative order-1 flex flex-col justify-center px-5 py-14 sm:px-9 lg:order-2 lg:px-14 lg:py-20 xl:px-20">
          <span
            className="absolute right-0 top-0 h-20 w-20 bg-red/20"
            style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }}
            aria-hidden="true"
          />
          <p className="section-label">زاوية الضوء / من نحن</p>
          <h1 className="mt-2 text-h1 text-white">إنارةٌ تُكمل حكاية المكان</h1>
          <p className="mt-6 max-w-[660px] text-body-lg text-text-dark-secondary">{intro}</p>
          <p className="mt-8 border-r-2 border-red pr-4 text-body-sm text-text-dark-muted">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 divide-y divide-surface-border border-y border-surface-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((item, index) => (
            <div key={item.label} className="flex items-center gap-5 py-6 sm:justify-center sm:px-5 sm:py-8 lg:gap-7">
              <span className="text-mono text-red-bright">0{index + 1}</span>
              <div className="flex items-baseline gap-3 sm:flex-col sm:gap-1">
                <span className="text-[clamp(30px,3.4vw,48px)] font-bold leading-none tracking-tight text-text-primary">
                  {item.value}
                </span>
                <span className="text-body-sm text-text-secondary">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <figure className="relative min-h-[360px] overflow-hidden rounded-tr-[32px] rounded-bl-[32px] sm:min-h-[480px] lg:min-h-[560px]">
            <Image
              src={vision.image}
              alt="إنارة ممرات ومساحات عامة"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </figure>
          <div>
            <p className="section-label">رؤيتنا / 01</p>
            <h2 className="section-title">{vision.title}</h2>
            <p className="section-description">{vision.text}</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 xl:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-4 sm:grid-cols-6 sm:grid-rows-[240px_180px] lg:grid-rows-[340px_250px]">
          {gallery.map((src, index) => {
            const layout = [
              "sm:col-span-4 sm:row-span-2 rounded-tl-[28px]",
              "sm:col-span-2 rounded-tr-[24px]",
              "sm:col-span-2 rounded-bl-[24px]",
              "sm:col-span-2 rounded-br-[28px]",
            ];
            return (
              <figure
                key={src}
                className={`group relative min-h-[190px] overflow-hidden ${layout[index] ?? "sm:col-span-2"}`}
              >
                <Image
                  src={src}
                  alt={`مشهد من أعمال الإنارة ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 65vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </figure>
            );
          })}
        </div>
      </section>

      <section className="section overflow-hidden bg-ink px-4 text-white sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <figure className="relative order-2 min-h-[320px] overflow-hidden rounded-tl-[28px] lg:order-1 lg:min-h-[500px]">
            <Image
              src={mission.image}
              alt="عمود إنارة ديكوري في موقع مفتوح"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </figure>
          <div className="order-1 lg:order-2">
            <p className="section-label">مهمتنا / 02</p>
            <h2 className="section-title-light">{mission.title}</h2>
            <p className="section-description-light max-w-[660px]">{mission.text}</p>
            <ul className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              {["التصميم والتصنيع", "التوريد والتركيب", "الصيانة"].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/20 px-4 py-3 text-caption font-semibold text-text-dark-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
          <figure className="relative min-h-[300px] overflow-hidden rounded-br-[28px] sm:min-h-[380px] lg:min-h-[460px]">
            <Image
              src={partners.image}
              alt="أعمدة إنارة في ساحة عامة"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </figure>
          <div>
            <p className="section-label">علاقات العمل / 03</p>
            <h2 className="section-title">{partners.title}</h2>
            <p className="section-description">{partners.text}</p>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5">
              {clients.map((client) => (
                <li key={client.id} className="card flex min-h-[110px] items-center justify-center px-3 py-3 sm:min-h-[130px]">
                  <span className="relative h-[70px] w-[110px] sm:h-[90px] sm:w-[150px]">
                    <Image src={client.image} alt={client.alt} fill sizes="150px" className="object-contain" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 xl:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 rounded-2xl border border-surface-border bg-surface px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-12">
          <div>
            <p className="section-label">زاوية الضوء / 04</p>
            <h2 className="text-h3 text-text-primary">{excellence.title}</h2>
            <p className="mt-3 max-w-[760px] text-body text-text-secondary">{excellence.text}</p>
          </div>
          <Link href="/contact" className="btn-primary-lg group shrink-0">
            تواصل معنا
            <ArrowUpLeft size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </article>
  );
}