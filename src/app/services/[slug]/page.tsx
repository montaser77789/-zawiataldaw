import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowUpRight, BsCheckLg } from "react-icons/bs";
import { getServiceBySlug, SERVICES } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "الخدمة غير موجودة" };
  }

  return {
    title: `${service.title} | زاوية الضوء`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article>
      <section className="grid bg-ink text-white lg:min-h-[540px] lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative order-2 min-h-[320px] lg:order-1 lg:min-h-[540px]">
          <Image src={service.image} alt={service.title} fill priority sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" />
          <span className="absolute bottom-0 right-0 h-14 w-14 bg-red" style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }} aria-hidden="true" />
        </div>
        <div className="relative order-1 flex flex-col justify-center px-5 py-12 sm:px-9 lg:order-2 lg:px-14 lg:py-20">
          <span className="absolute right-0 top-0 h-14 w-14 bg-red" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
          <span className="font-mono text-[12px] text-red-bright">CAPABILITY / {service.id.toString().padStart(2, "0")}</span>
          <h1 className="mt-5 max-w-[700px] text-[34px] font-bold leading-[1.3] sm:text-[48px] lg:text-[60px]">{service.title}</h1>
          <p className="mt-5 max-w-[600px] text-[15px] leading-[1.9] text-text-dark-secondary sm:text-[17px]">{service.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-14 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-[28px] text-text-primary lg:text-[44px]">نبذة عن الخدمة</h2>
            <p className="mt-6 text-[17px] leading-[2] text-text-secondary lg:text-[20px]">
              {service.description}
            </p>

            <div className="mt-12 space-y-6">
              {service.features.map((feature) => (
                <div key={feature} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red text-black">
                    <BsCheckLg size={14} />
                  </span>
                  <span className="text-[17px] leading-[1.8] text-text-primary lg:text-[20px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="group mt-12 inline-flex h-14 items-center gap-5 bg-red px-6 text-[14px] font-semibold text-white transition hover:bg-ink sm:h-16 sm:px-8">
              اطلب الخدمة الآن <BsArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>

          <aside className="h-fit border-t-2 border-red bg-ink p-6 text-white sm:p-8">
            <h3 className="text-[24px] lg:text-[30px]">لماذا زاوية الضوء؟</h3>
            <p className="mt-4 text-[16px] leading-[2] text-text-dark-secondary lg:text-[18px]">
              خبرة منذ 2007 في تنفيذ مشاريع الإنارة بأعلى معايير الجودة والالتزام بالمواعيد.
            </p>
            <ul className="mt-8 space-y-4 text-[15px] text-text-dark-secondary lg:text-[17px]">
              <li>• فرق فنية متخصصة</li>
              <li>• منتجات معتمدة</li>
              <li>• دعم ما بعد التسليم</li>
              <li>• حلول مخصصة لكل مشروع</li>
            </ul>
          </aside>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="border-y border-surface-border bg-surface px-5 py-14 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="text-center text-[28px] text-text-primary lg:text-[44px]">
              خدمات أخرى
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group overflow-hidden border border-surface-border bg-background"
                >
                  <div className="relative h-[220px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[20px] leading-[1.5] text-text-primary lg:text-[24px]">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
