import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export default function ProjectsDropdown() {
  return (
    <div className="invisible absolute right-0 top-full z-50 w-[min(90vw,420px)] translate-y-2 border-t-2 border-primary bg-white p-6 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
        {PROJECTS.map((item) => (
          <Link
            key={item.slug}
            href={`/projects/${item.slug}`}
            className="border-b border-border py-3 text-right text-[13px] text-text-secondary transition hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
