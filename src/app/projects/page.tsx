import ProjectsGrid from "./ProjectsGrid";

export const metadata = {
  title: "المشاريع | زاوية الضوء",
  description:
    "نماذج من أعمال زاوية الضوء في إنارة الطرق والمشاريع الحضرية.",
};

export default function ProjectsPage() {
  return (
    <section className="px-4 pb-20 pt-10 sm:px-6 sm:pb-28 lg:px-8 lg:pt-16 xl:px-10">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-10 flex flex-col justify-between gap-6 border-b border-surface-border pb-8 lg:mb-14 lg:flex-row lg:items-end lg:pb-10">
          <div>
            <p className="section-label">سجل الأعمال / 2025</p>
            <h1 className="text-h1 text-text-primary">
              الضوء في <span className="text-accent">الميدان</span>
            </h1>
          </div>
          <p className="max-w-[470px] text-body text-text-secondary">
            محفظة متنوعة من مشاريع الإنارة المحلية — طرقية، ديكورية، حضرية، وصناعية
            — تعكس خبرتنا في مختلف القطاعات.
          </p>
        </header>

        <ProjectsGrid />
      </div>
    </section>
  );
}