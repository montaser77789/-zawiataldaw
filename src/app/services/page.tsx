import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { SERVICES } from "@/data/services";
import LightingSolutions from "@/app/_components/LightingSolutions";

export const metadata = {
  title: "خدماتنا | زاوية الضوء",
  description:
    "مجالات عمل زاوية الضوء في إنارة الطرق والتصنيع والتوريد والتركيب والصيانة.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pt-16 xl:px-10">
        <div className="mx-auto max-w-[1500px]">
          <header className="grid gap-6 border-b border-surface-border pb-8 sm:pb-11 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div>
              <p className="section-label">مجالات العمل / 01–07</p>
              <h1 className="mt-1 max-w-[760px] text-h1 text-text-primary">
                حلول مترابطة، من التجهيز إلى الموقع
              </h1>
            </div>
            <p className="max-w-[510px] text-body text-text-secondary lg:pb-2">
              نعمل عبر مجالات الإنارة والتجهيزات الكهربائية، مع تفاصيل تنفيذ تتشكل حسب متطلبات كل مشروع.
            </p>
          </header>

          <div className="divide-y divide-surface-border">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-6 py-8 sm:py-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12 lg:py-12"
              >
                <figure
                  className={`relative min-h-[260px] overflow-hidden rounded-xl bg-ink sm:min-h-[350px] lg:min-h-[330px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute right-0 top-0 h-12 w-12 bg-red/25"
                    style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }}
                    aria-hidden="true"
                  />
                </figure>

                <div
                  className={`grid grid-cols-[48px_1fr] gap-4 sm:grid-cols-[70px_1fr] sm:gap-6 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <span className="pt-2 text-mono text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-h3 text-text-primary transition-colors group-hover:text-accent">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-[650px] text-body-sm text-text-secondary sm:mt-5 sm:text-body">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 text-body-sm font-semibold text-accent sm:mt-7">
                      عرض تفاصيل الخدمة
                      <ArrowUpLeft
                        size={18}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </span>
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