import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "المشاريع | زاوية الضوء",
  description: "نماذج من أعمال زاوية الضوء في إنارة الطرق والمشاريع الحضرية.",
};

export default function ProjectsPage() {
  const [featured, ...projects] = PROJECTS;

  return (
    <section className="px-4 pb-20 pt-10 sm:px-7 sm:pb-28 lg:px-10 lg:pt-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-9 flex flex-col justify-between gap-6 border-b border-border pb-8 sm:mb-12 sm:pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]"><span className="h-[2px] w-8 bg-primary" /> سجل الأعمال / 2025</p>
            <h1 className="text-[38px] font-bold leading-[1.25] text-text-primary sm:text-[54px] lg:text-[68px]">الضوء في الميدان</h1>
          </div>
          <p className="max-w-[470px] text-[15px] leading-[2] text-text-secondary sm:text-[17px]">
            نماذج من مشاريع الإنارة الطريقية والحضرية كما تظهر في سجل زاوية الضوء.
          </p>
        </div>

        {featured && (
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-7">
            <Link href={`/projects/${featured.slug}`} className="group relative min-h-[420px] overflow-hidden bg-dark-surface sm:min-h-[580px] lg:min-h-[720px]">
              <Image src={featured.image} alt={featured.title} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <span className="absolute right-0 top-0 h-16 w-16 bg-primary" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} aria-hidden="true" />
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white sm:p-9 lg:p-12">
                <span className="font-mono text-[12px] text-primary">FEATURED / {featured.year}</span>
                <h2 className="mt-3 max-w-[600px] text-[30px] font-bold leading-[1.3] sm:text-[40px] lg:text-[48px]">{featured.title}</h2>
                <p className="mt-3 max-w-[610px] text-[14px] leading-[1.9] text-white/75 sm:text-[16px]">{featured.description}</p>
                <span className="mt-6 inline-flex items-center gap-3 border-b border-white/40 pb-3 text-[13px] font-semibold">تفاصيل المشروع <ArrowUpLeft size={18} className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
              </div>
            </Link>

            <div className="flex flex-col divide-y divide-border border-y border-border">
              {projects.map((project, index) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid flex-1 grid-cols-[110px_1fr] items-center gap-4 py-4 sm:grid-cols-[150px_1fr] sm:gap-6 sm:py-5">
                  <div className="relative h-[130px] overflow-hidden bg-dark-surface sm:h-[160px]">
                    <Image src={project.image} alt={project.title} fill sizes="150px" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-primary">0{index + 2} / {project.year}</span>
                    <h2 className="mt-2 text-[19px] font-bold leading-[1.45] text-text-primary transition group-hover:text-primary sm:text-[24px]">{project.title}</h2>
                    <p className="mt-1 text-[12px] text-text-secondary sm:mt-2 sm:text-[14px]">{project.location}</p>
                    <ArrowUpLeft size={18} className="mt-3 text-text-secondary transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
