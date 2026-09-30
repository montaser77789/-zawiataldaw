import { contactInfo } from "@/data/navLinks";

export default function TopBar() {
  return (
    <div className="hidden h-[42px] items-center border-b border-border bg-dark-surface text-white/70 lg:flex">
      <div className="mx-auto flex w-full max-w-[1600px] justify-start gap-10 px-8 text-[12px]">
        <span className="hidden xl:block text-primary">زاوية الضوء / حلول إنارة متكاملة</span>
        <div className="mr-auto flex items-center gap-8">
          <span className="hidden xl:block">{contactInfo.location}</span>
          <a href={`tel:${contactInfo.phoneTel}`} dir="ltr" className="transition hover:text-white">
            {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email1}`} className="transition hover:text-white">
            {contactInfo.email1}
          </a>
        </div>
      </div>
    </div>
  );
}
