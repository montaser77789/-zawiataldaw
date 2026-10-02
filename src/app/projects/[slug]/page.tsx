import Image from "next/image";
import Link from "next/link";
import { notFound} from "next/navigation";
import { BsArrowUpRight, BsCheckLg } from "react-icons/bs";
import { getProjectBySlug, PROJECTS, PROJECT_TYPES, type ProjectType } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

const typeLabels = Object.fromEntries(
  PROJECT_TYPES.map((type) => [type.value, type.label]),
) as Record<ProjectType, string>;

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "المشروع غير موجود" };
  }

  return {
    title: `${project.title} | زاوية الضوء`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article>
      <section className="grid bg-ink text-white lg:min-h-[560px] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative order-2 min-h-[320px] lg:order-1 lg:min-h-[560px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
          <span className="absolute right-5 top-5 rounded-lg bg-red px-4 py-2 text-caption font-semibold text-white">
            {typeLabels[project.type]}
          </span>
        </div>

        <div className="relative order-1 flex flex-col justify-center px-5 py-12 sm:px-9 lg:order-2 lg:px-14 lg:py-20">
          <span
            className="absolute right-0 top-0 h-20 w-20 bg-red/20"
            style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }}
            aria-hidden="true"
          />
          <span className="text-mono text-red-bright">سجل الأعمال / {project.year}</span>
          <h1 className="mt-5 max-w-[700px] text-h1 text-white">{project.title}</h1>
          <p className="mt-5 text-body text-text-dark-secondary">{project.location}</p>

          <Link
            href="/projects"
            className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-white/25 pb-3 text-body-sm font-semibold text-white transition-colors hover:border-red sm:mt-12"
          >
            العودة إلى سجل الأعمال
            <BsArrowUpRight className="text-red-bright transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <h2 className="text-h2 text-text-primary">تفاصيل المشروع</h2>
            <p className="mt-6 text-body-lg text-text-secondary">{project.description}</p>

            <h3 className="mt-12 text-h3 text-text-primary">نطاق العمل</h3>
            <ul className="mt-6 space-y-4">
              {project.scope.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-red text-white">
                    <BsCheckLg size={15} />
                  </span>
                  <span className="text-body-lg text-text-primary">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary-lg group mt-12">
              ابدأ مشروعك معنا
              <BsArrowUpRight size={20} className="transition-transform group-hover:rotate-90" />
            </Link>
          </div>

          <aside className="h-fit rounded-tl-[24px] border-t-4 border-red bg-ink p-6 text-white sm:p-8">
            <h2 className="text-h4 text-white">معلومات المشروع</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-caption text-text-dark-muted">سنة التنفيذ</dt>
                <dd className="mt-1 text-h4 text-white">{project.year}</dd>
              </div>
              <div>
                <dt className="text-caption text-text-dark-muted">نوع المشروع</dt>
                <dd className="mt-2">
                  <span className="rounded-lg bg-red px-3 py-1.5 text-caption font-semibold text-white">
                    {typeLabels[project.type]}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-caption text-text-dark-muted">الموقع</dt>
                <dd className="mt-1 text-body text-text-dark-secondary">{project.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-y border-surface-border bg-surface px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="section-title text-center">مشاريع أخرى</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="card card-hover group block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <span className="absolute right-3 top-3 rounded-lg bg-red px-3 py-1.5 text-caption font-semibold text-white">
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="text-mono text-accent">{item.year}</span>
                    <h3 className="mt-2 text-h4 text-text-primary transition-colors group-hover:text-accent">
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
