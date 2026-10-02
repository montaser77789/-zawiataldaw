import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { aboutContent } from "@/data/about";

export default function AboutPreview() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 xl:gap-24">
        <div className="order-2 grid min-h-[420px] grid-cols-[1.05fr_0.8fr] items-end gap-4 sm:min-h-[540px] lg:order-1 lg:min-h-[600px]">
          <figure className="relative h-[340px] overflow-hidden rounded-tl-[32px] rounded-br-[32px] sm:h-[470px] lg:h-[530px]">
            <Image src="/about/about-main.jpg" alt="إنارة أعمدة على امتداد ممشى" fill sizes="(max-width: 1024px) 60vw, 40vw" className="object-cover" />
            <span className="absolute bottom-0 right-0 h-20 w-20 bg-red/20" style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }} aria-hidden="true" />
          </figure>
          <figure className="relative mb-12 h-[230px] overflow-hidden rounded-tr-[24px] rounded-bl-[24px] border-[6px] border-white sm:mb-16 sm:h-[330px] lg:mb-20 lg:h-[390px]">
            <Image src="/about/about-small.jpg" alt="إنارة ممر وحديقة في المساء" fill sizes="(max-width: 1024px) 45vw, 30vw" className="object-cover" />
          </figure>
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-label">03 / طريقة عملنا</p>
          <h2 className="section-title">
            الإنارة جزءٌ من <span className="text-accent">تجربة المكان</span>
          </h2>
          <p className="mt-6 max-w-[650px] text-body-lg text-text-secondary lg:mt-8">{aboutContent.intro}</p>

          <ol className="mt-8 grid max-w-[600px] grid-cols-3 border-y border-surface-border py-6 sm:mt-10 sm:py-7">
            {[
              ["01", "التصميم والتخطيط"],
              ["02", "التصنيع والتوريد"],
              ["03", "التركيب والصيانة"],
            ].map(([number, label]) => (
              <li key={number} className="border-l border-surface-border px-3 first:pr-0 last:border-0 sm:px-5">
                <span className="text-mono text-accent">{number}</span>
                <p className="mt-2 text-body-sm font-semibold text-text-primary">{label}</p>
              </li>
            ))}
          </ol>

          <Link href="/about" className="group mt-8 inline-flex items-center gap-3 text-body-sm font-semibold text-text-primary transition-colors hover:text-accent sm:mt-10">
            حكاية زاوية الضوء
            <ArrowUpLeft size={18} className="text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}