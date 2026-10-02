import { aboutContent } from "@/data/about";

export default function Achievements() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-white/15 border-y border-white/15 border-t-2 border-t-red bg-ink px-6 py-2 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-14 xl:px-20">
        {aboutContent.stats.map((item, index) => (
          <div key={item.label} className="flex items-center gap-5 py-6 sm:justify-center sm:py-8 lg:gap-7 lg:py-10">
            <span className="text-mono text-red-bright font-bold">0{index + 1}</span>
            <div className="flex items-baseline gap-3 sm:flex-col sm:items-start sm:gap-2">
              <span className="text-[clamp(34px,4.4vw,52px)] font-extrabold leading-none tracking-tight text-white">{item.value}</span>
              <span className="text-body-sm font-semibold text-text-dark-secondary">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}