import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { aboutContent } from "@/data/about";

export default function AboutPreview() {
  return (
    <section className="px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 xl:gap-24">
        <div className="relative order-2 grid min-h-[420px] grid-cols-[1.05fr_0.8fr] items-end gap-3 sm:min-h-[540px] sm:gap-5 lg:order-1 lg:min-h-[600px]">
          <div className="relative h-[340px] overflow-hidden sm:h-[470px] lg:h-[530px]">
            <Image src="/about/about-main.jpg" alt="إنارة أعمدة على امتداد ممشى" fill sizes="(max-width: 1024px) 60vw, 40vw" className="object-cover" />
            <span className="absolute bottom-0 right-0 h-16 w-16 bg-primary" style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }} aria-hidden="true" />
          </div>
          <div className="relative mb-10 h-[230px] overflow-hidden border-[6px] border-background sm:mb-14 sm:h-[330px] lg:mb-16 lg:h-[390px]">
            <Image src="/about/about-small.jpg" alt="إنارة ممر وحديقة في المساء" fill sizes="(max-width: 1024px) 45vw, 30vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <span className="absolute bottom-0 left-0 font-mono text-[11px] tracking-[0.16em] text-text-secondary">FIELD NOTES / 01</span>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
            <span className="h-[2px] w-8 bg-primary" /> 03 / طريقة عملنا
          </p>
          <h2 className="max-w-[680px] text-[34px] font-bold leading-[1.35] text-text-primary sm:text-[46px] lg:text-[58px]">
            الإنارة جزءٌ من <span className="text-primary">تجربة المكان</span>
          </h2>
          <p className="mt-6 max-w-[650px] text-[16px] leading-[2] text-text-secondary sm:text-[18px] lg:mt-8 lg:text-[19px]">
            {aboutContent.intro}
          </p>
          <div className="mt-8 grid max-w-[600px] grid-cols-3 border-y border-border py-5 sm:mt-10 sm:py-6">
            {[
              ["01", "التصميم والتخطيط"],
              ["02", "التصنيع والتوريد"],
              ["03", "التركيب والصيانة"],
            ].map(([number, label]) => (
              <div key={number} className="border-l border-border px-3 first:pr-0 last:border-0 sm:px-5">
                <span className="font-mono text-[11px] text-primary">{number}</span>
                <p className="mt-2 text-[12px] font-semibold leading-[1.7] text-text-primary sm:text-[14px]">{label}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-3 text-[14px] font-semibold text-text-primary transition hover:text-primary sm:mt-10">
            حكاية زاوية الضوء <ArrowUpLeft size={18} className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
