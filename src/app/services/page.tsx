import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { SERVICES } from "@/data/services";
import LightingSolutions from "@/app/_components/LightingSolutions";

export const metadata = {
  title: "خدماتنا | زاوية الضوء",
  description: "مجالات عمل زاوية الضوء في إنارة الطرق والتصنيع والتوريد والتركيب والصيانة.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-10 sm:px-7 sm:pb-20 lg:px-10 lg:pt-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 border-b border-border pb-8 sm:pb-11 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]"><span className="h-[2px] w-8 bg-primary" /> مجالات العمل / 01–07</p>
              <h1 className="max-w-[760px] text-[38px] font-bold leading-[1.28] text-text-primary sm:text-[54px] lg:text-[68px]">حلول مترابطة، من التجهيز إلى الموقع</h1>
            </div>
            <p className="max-w-[510px] text-[15px] leading-[2] text-text-secondary sm:text-[17px] lg:pb-2">
              نعمل عبر مجالات الإنارة والتجهيزات الكهربائية، مع تفاصيل تنفيذ تتشكل حسب متطلبات كل مشروع.
            </p>
          </div>

          <div className="divide-y divide-border">
            {SERVICES.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group grid gap-5 py-7 sm:py-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12 lg:py-12">
                <div className={`relative min-h-[260px] overflow-hidden bg-dark-surface sm:min-h-[350px] lg:min-h-[330px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={service.image} alt={service.title} fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                  <span className="absolute right-0 top-0 h-12 w-12 bg-primary" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
                </div>
                <div className={`grid grid-cols-[48px_1fr] gap-4 sm:grid-cols-[70px_1fr] sm:gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="pt-2 font-mono text-[13px] text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-[25px] font-bold leading-[1.4] text-text-primary transition group-hover:text-primary sm:text-[34px] lg:text-[40px]">{service.title}</h2>
                    <p className="mt-3 max-w-[650px] text-[14px] leading-[1.9] text-text-secondary sm:mt-5 sm:text-[16px]">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-3 text-[13px] font-semibold sm:mt-7 sm:text-[14px]">عرض تفاصيل الخدمة <ArrowUpLeft size={18} className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <LightingSolutions />
    </>
  );
}
