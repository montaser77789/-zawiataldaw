import Image from "next/image";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import { contactInfo } from "@/data/navLinks";
import { clients } from "@/app/data/heroData";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "اتصل بنا | زاوية الضوء",
  description: "تواصل مع زاوية الضوء للاستفسار عن خدمات الإنارة وأعمدة الإنارة",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1500px] px-4 py-10 sm:px-7 lg:px-10 lg:py-16">
        <div className="mb-9 grid gap-5 border-b border-border pb-8 sm:mb-12 sm:pb-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <span className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]"><i className="h-[2px] w-8 bg-primary" /> زاوية الضوء / 06</span>
            <h1 className="text-[38px] font-bold text-text-primary sm:text-[54px] lg:text-[68px]">لنبدأ من احتياج مشروعك</h1>
          </div>
          <p className="max-w-[550px] text-[15px] leading-[2] text-text-secondary sm:text-[17px]">
            أرسل تفاصيل استفسارك، أو تواصل معنا مباشرة عبر الهاتف والبريد الإلكتروني.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:gap-10">
          <div className="border border-border bg-white p-5 sm:p-8 lg:p-10">
            <h2 className="mb-7 text-[25px] font-bold text-text-primary lg:text-[32px]">
              أرسل رسالة
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="border-r-2 border-primary bg-dark-surface p-6 text-white lg:p-8">
              <h2 className="text-[24px] lg:text-[28px]">معلومات التواصل</h2>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <BsTelephone className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="text-white/70">الجوال</p>
                    <a
                      href={`tel:${contactInfo.phoneTel}`}
                      className="mt-1 block text-[18px] transition hover:text-primary"
                      dir="ltr"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <BsEnvelope className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="text-white/70">البريد الإلكتروني</p>
                    <a
                      href={`mailto:${contactInfo.email1}`}
                      className="mt-1 block text-[16px] transition hover:text-primary lg:text-[17px]"
                    >
                      {contactInfo.email1}
                    </a>
                    <a
                      href={`mailto:${contactInfo.email2}`}
                      className="mt-2 block text-[16px] transition hover:text-primary lg:text-[17px]"
                    >
                      {contactInfo.email2}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <BsGeoAlt className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="text-white/70">الموقع</p>
                    <a
                      href={contactInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[17px] leading-[1.8] transition hover:text-primary"
                    >
                      {contactInfo.location}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden border border-border bg-white">
              <div className="relative h-[260px] bg-surface sm:h-[320px]">
                <iframe
                  title="موقع زاوية الضوء"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14507.828996950026!2d46.8193596!3d24.6251583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f08223fb1192d%3A0x44885e27442ae2bc!2z2KfZhNmG2YjYsdiMINin2YTYsdmK2KfYtiAxNDMyMdiMINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1790700757514!5m2!1sar!2seg"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white px-5 py-4 transition hover:text-primary">
                <span className="text-[15px] text-text-secondary">افتح الموقع على خرائط Google</span>
                <BsGeoAlt className="text-primary" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <span className="text-primary text-[18px] lg:text-[22px]">شركاء النجاح</span>
            <h2 className="mt-3 text-[30px] text-text-primary lg:text-[52px]">
              عملاؤنا وشركاؤنا
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:mt-14 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex h-[120px] items-center justify-center rounded-[20px] bg-white p-4 shadow-main lg:h-[140px] lg:rounded-[24px]"
              >
                <Image
                  src={client.image}
                  alt={client.alt}
                  width={160}
                  height={80}
                  className="max-h-[70px] w-auto object-contain opacity-80 grayscale transition hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
