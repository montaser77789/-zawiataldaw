"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS, PROJECT_TYPES, type ProjectType, getProjectsByType } from "@/data/projects";
import { useState } from "react";

const typeLabels: Record<ProjectType, string> = {
  "street-lighting": "إنارة طرقية",
  "decorative-lighting": "إنارة ديكورية",
  "urban-lighting": "إنارة حضرية",
  "industrial-lighting": "إنارة صناعية",
};

const typeColors: Record<ProjectType, string> = {
  "street-lighting": "bg-amber-600/20 text-amber-700 border-amber-500/30",
  "decorative-lighting": "bg-pink-600/20 text-pink-700 border-pink-500/30",
  "urban-lighting": "bg-blue-600/20 text-blue-700 border-blue-500/30",
  "industrial-lighting": "bg-orange-600/20 text-orange-700 border-orange-500/30",
};

export default function ProjectsPage() {
  const [activeType, setActiveType] = useState<ProjectType | "all">("all");

  const filteredProjects = activeType === "all"
    ? PROJECTS
    : getProjectsByType(activeType);

  return (
    <section className="px-4 pb-20 pt-10 sm:px-7 sm:pb-28 lg:px-10 lg:pt-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-9 flex flex-col justify-between gap-6 border-b border-border pb-8 sm:mb-12 sm:pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
              <span className="h-[2px] w-8 bg-primary" /> سجل الأعمال / 2025
            </p>
            <h1 className="text-[38px] font-bold leading-[1.25] text-text-primary sm:text-[54px] lg:text-[68px]">
              الضوء في <span className="text-primary">الميدان</span>
            </h1>
          </div>
          <p className="max-w-[470px] text-[15px] leading-[2] text-text-secondary sm:text-[17px]">
            محفظة متنوعة من مشاريع الإنارة المحلية — طرقية، ديكورية، حضرية، وصناعية — تعكس خبرتنا في مختلف القطاعات.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2 sm:mb-14" role="group" aria-label="تصفية المشاريع حسب النوع">
          <button
            type="button"
            onClick={() => setActiveType("all")}
            aria-pressed={activeType === "all"}
            className={`px-4 py-2 text-[12px] font-semibold tracking-[0.08em] rounded-full border transition ${activeType === "all" ? "bg-primary text-white border-primary" : "bg-background text-text-secondary border-border hover:border-primary hover:text-primary"}`}
          >
            الكل
          </button>
          {PROJECT_TYPES.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setActiveType(type.value)}
              aria-pressed={activeType === type.value}
              className={`px-4 py-2 text-[12px] font-semibold tracking-[0.08em] rounded-full border transition ${activeType === type.value ? "bg-primary text-white border-primary" : "bg-background text-text-secondary border-border hover:border-primary hover:text-primary"}`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="list" aria-label="قائمة المشاريع">
          {filteredProjects.map((project, index) => (
            <article key={project.slug} className="group relative overflow-hidden bg-background" role="listitem">
              <Link href={`/projects/${project.slug}`} className="block group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.1em] rounded-full border ${typeColors[project.type]}`}>
                      {typeLabels[project.type]}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-[11px] text-white/80 tracking-[0.16em]">ZA / {String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-2 text-[11px] text-text-secondary">
                    <span className="font-mono text-primary">{project.year}</span>
                    <span className="h-px w-8 bg-border" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <h3 className="text-[19px] font-bold leading-[1.4] text-text-primary group-hover:text-primary transition-colors sm:text-[22px]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary line-clamp-2 sm:text-[14px]">
                    {project.description}
                  </p>
                </div>
              </Link>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-16 text-center text-text-secondary">
              لا توجد مشاريع في هذا التصنيف
            </div>
          )}
        </div>
      </div>
    </section>
  );
}