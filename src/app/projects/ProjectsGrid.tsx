"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS, PROJECT_TYPES, type ProjectType } from "@/data/projects";
import { useState } from "react";

const typeLabels: Record<ProjectType, string> = {
  "street-lighting": "إنارة طرقية",
  "decorative-lighting": "إنارة ديكورية",
  "urban-lighting": "إنارة حضرية",
  "industrial-lighting": "إنارة صناعية",
};

export default function ProjectsGrid() {
  const [activeType, setActiveType] = useState<ProjectType | "all">("all");

  const filtered =
    activeType === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === activeType);

  const filterClass = (active: boolean) =>
    `rounded-lg px-4 py-2.5 text-caption font-semibold transition-all ${
      active
        ? "bg-red text-white shadow-md"
        : "border border-surface-border bg-white text-text-secondary hover:border-red hover:text-accent"
    }`;

  return (
    <>
      <div
        className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-12 sm:flex-wrap sm:px-0 sm:pb-0"
        role="group"
        aria-label="تصفية المشاريع حسب النوع"
      >
        <button
          type="button"
          onClick={() => setActiveType("all")}
          aria-pressed={activeType === "all"}
          className={filterClass(activeType === "all")}
        >
          الكل
        </button>
        {PROJECT_TYPES.map((type) => (
          <button
            key={type.value}
            type="button"
            onClick={() => setActiveType(type.value)}
            aria-pressed={activeType === type.value}
            className={filterClass(activeType === type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((project) => (
          <article key={project.slug} className="card card-hover">
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute right-3 top-3 rounded-lg bg-red px-3 py-1.5 text-caption font-semibold text-white">
                  {typeLabels[project.type]}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2 text-caption text-text-secondary">
                  <span className="text-mono text-accent">{project.year}</span>
                  <span className="h-px w-8 bg-surface-border" />
                  <span className="truncate">{project.location}</span>
                </div>
                <h2 className="text-h4 text-text-primary transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <p className="mt-3 text-body-sm text-text-secondary line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-body text-text-secondary">
            لا توجد مشاريع في هذا التصنيف
          </p>
        )}
      </div>
    </>
  );
}