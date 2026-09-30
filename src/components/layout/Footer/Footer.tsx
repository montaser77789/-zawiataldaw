"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, ArrowUp } from "lucide-react";
import { contactInfo, footerLinks, footerServices } from "@/data/navLinks";

export default function Footer() {
  return (
    <footer className="mt-10 border-t-[5px] border-primary bg-dark-surface text-white lg:mt-16">
      <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <div className="mb-12 grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-white/50"><span className="h-[2px] w-8 bg-primary" /> زاوية الضوء / 07</p>
            <h2 className="max-w-[720px] text-[32px] font-bold leading-[1.35] sm:text-[42px] lg:text-[54px]">لنجعل الخطوة التالية <span className="text-primary">أكثر وضوحًا</span></h2>
          </div>
          <Link href="/contact" className="group inline-flex h-14 items-center gap-5 bg-primary px-6 text-[14px] font-semibold text-white transition hover:bg-white hover:text-black sm:h-16 sm:px-8">
            تواصل مع الفريق <ArrowUpLeft size={19} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.15fr] lg:gap-12">
          <div>
            <div className="inline-flex bg-white px-3 py-1">
              <Image src="/logo.png" alt="شعار زاوية الضوء" width={230} height={153} className="h-auto w-[210px] object-contain" />
            </div>
            <p className="mt-6 max-w-[360px] text-[14px] leading-[1.9] text-white/60 sm:text-[15px]">
              حلول الإنارة وأعمدة الطرق والمشاريع الكهربائية — من التصنيع والتوريد إلى التنفيذ والصيانة.
            </p>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-3 text-[16px] font-bold"><span className="h-4 w-[2px] bg-primary" /> التصفح</h3>
            <ul className="space-y-3">
              {footerLinks.map((item) => <li key={item.href}><Link href={item.href} className="text-[14px] text-white/60 transition hover:text-white">{item.title}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-3 text-[16px] font-bold"><span className="h-4 w-[2px] bg-primary" /> مجالات العمل</h3>
            <ul className="space-y-3">
              {footerServices.map((item) => <li key={item} className="text-[14px] text-white/60">{item}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-3 text-[16px] font-bold"><span className="h-4 w-[2px] bg-primary" /> تواصل معنا</h3>
            <div className="space-y-4 text-[14px] text-white/65">
              <a href={`tel:${contactInfo.phoneTel}`} dir="ltr" className="block w-fit transition hover:text-white">{contactInfo.phone}</a>
              <a href={`mailto:${contactInfo.email1}`} className="block w-fit break-all transition hover:text-white">{contactInfo.email1}</a>
              <a href={`mailto:${contactInfo.email2}`} className="block w-fit break-all transition hover:text-white">{contactInfo.email2}</a>
              <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="block leading-[1.8] transition hover:text-white">{contactInfo.location}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 زاوية الضوء — جميع الحقوق محفوظة</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group inline-flex items-center gap-2 self-start transition hover:text-white sm:self-auto">
            العودة إلى الأعلى <ArrowUp size={16} className="text-primary transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
