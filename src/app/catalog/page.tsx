import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { catalogInfo } from "@/data/navLinks";

export const metadata = {
  title: "الكتالوج | زاوية الضوء",
  description: catalogInfo.description,
};

export default function CatalogPage() {
  return (
    <section className="mx-auto max-w-[1450px] px-4 py-10 sm:px-7 lg:px-10 lg:py-16">
      <div className="grid overflow-hidden bg-ink text-white lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-2 min-h-[330px] lg:order-1 lg:min-h-[580px]">
          <Image
            src={catalogInfo.coverImage}
            alt={catalogInfo.title}
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
          <span className="absolute bottom-0 right-0 h-14 w-14 bg-red" style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }} aria-hidden="true" />
        </div>

        <div className="relative order-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-2 lg:px-14 lg:py-20">
          <span className="absolute right-0 top-0 h-14 w-14 bg-red" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
          <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-dark-secondary"><i className="h-[2px] w-8 bg-red" /> مكتبة زاوية الضوء / 01</p>
          <h1 className="text-[36px] font-bold leading-[1.3] sm:text-[48px] lg:text-[58px]">{catalogInfo.title}</h1>
          <p className="mt-6 text-[15px] leading-[2] text-text-dark-secondary lg:text-[18px]">
            {catalogInfo.description}
          </p>
          <p className="mt-5 text-[14px] leading-[1.9] text-text-dark-secondary lg:text-[16px]">
            يتضمن الكتالوج مواصفات المنتجات، الصور، والحلول المتاحة لأعمال الإنارة
            الطريقية والديكورية.
          </p>

          <a
            href={catalogInfo.fileUrl}
            download={catalogInfo.fileName}
            className="group mt-8 inline-flex h-[58px] w-fit items-center gap-3 bg-red px-8 text-white transition hover:bg-white hover:text-black lg:mt-10 lg:h-[64px]"
          >
            <BsDownload size={22} />
            <span className="text-[17px] font-medium lg:text-[18px]">تنزيل الكتالوج PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
