"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, ArrowUp } from "lucide-react";
import { contactInfo, footerLinks, footerServices } from "@/data/navLinks";

export default function Footer() {
  return (
    <footer className="border-t-4 border-red bg-ink text-white">
      <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20 xl:px-10">
        <div className="mb-12 grid gap-8 border-b border-white/20 pb-10 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-14">
          <div>
            <p className="section-label on-dark">زاوية الضوء / 07</p>
            <h2 className="section-title-light max-w-[720px]">
              لنجعل الخطوة التالية <span className="text-red-bright">أكثر وضوحًا</span>
            </h2>
          </div>
          <Link href="/contact" className="btn-primary-lg group">
            تواصل مع الفريق
            <ArrowUpLeft size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.15fr] lg:gap-12">
          <div>
            <div className="inline-flex rounded-lg bg-white px-3 py-1.5">
              <Image src="/logo.png" alt="شعار زاوية الضوء" width={230} height={153} className="h-auto w-[200px] object-contain" />
            </div>
            <p className="mt-6 max-w-[360px] text-body-sm leading-[1.9] text-text-dark-secondary">
              حلول الإنارة وأعمدة الطرق والمشاريع الكهربائية — من التصنيع والتوريد إلى التنفيذ والصيانة.
            </p>
          </div>

          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav" className="mb-5 flex items-center gap-3 text-body font-bold text-white">
              <span className="divider" /> التصفح
            </h2>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-body-sm text-text-dark-secondary transition-colors hover:text-red-bright">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 flex items-center gap-3 text-body font-bold text-white">
              <span className="divider" /> مجالات العمل
            </h2>
            <ul className="space-y-3 text-body-sm text-text-dark-secondary">
              {footerServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 flex items-center gap-3 text-body font-bold text-white">
              <span className="divider" /> تواصل معنا
            </h2>
            <address className="space-y-3.5 text-body-sm not-italic text-text-dark-secondary">
              <a href={`tel:${contactInfo.phoneTel}`} dir="ltr" className="block w-fit transition-colors hover:text-red-bright">
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email1}`} className="block w-fit break-all transition-colors hover:text-red-bright">
                {contactInfo.email1}
              </a>
              <a href={`mailto:${contactInfo.email2}`} className="block w-fit break-all transition-colors hover:text-red-bright">
                {contactInfo.email2}
              </a>
              <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="block leading-[1.8] transition-colors hover:text-red-bright">
                {contactInfo.location}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-caption text-text-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 زاوية الضوء — جميع الحقوق محفوظة</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 self-start transition-colors hover:text-red-bright sm:self-auto"
          >
            العودة إلى الأعلى
            <ArrowUp size={16} className="text-red-bright transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}