import { aboutContent } from "@/data/about";

export default function Achievements() {
  return (
    <section className="px-3 pb-12 sm:px-5 lg:pb-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 divide-y divide-white/15 border-y border-white/15 bg-dark-surface px-6 py-2 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-white/15 sm:px-8 lg:px-14">
        {aboutContent.stats.map((item, index) => (
          <div key={item.label} className="flex items-center gap-5 py-5 sm:justify-center sm:py-7 lg:gap-7 lg:py-9">
            <span className="font-mono text-[12px] text-primary">0{index + 1}</span>
            <div className="flex items-baseline gap-3 sm:flex-col sm:items-start sm:gap-1">
              <span className="text-[34px] font-semibold leading-none tracking-tight sm:text-[38px] lg:text-[48px]">{item.value}</span>
              <span className="text-[13px] text-white/60 lg:text-[15px]">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
