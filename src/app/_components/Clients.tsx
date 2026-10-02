import Image from "next/image";
import { clients } from "../data/heroData";

export default function Clients() {
  return (
    <section className="border-t border-surface-border px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20 xl:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-center lg:gap-16">
        <div>
          <p className="section-label">جهات من سجل الأعمال</p>
          <h2 className="text-h4 text-text-primary">جهاتٌ نعتز بالعمل معها</h2>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:gap-5">
          {clients.map((client, index) => (
            <li key={client.id} className="card card-hover flex min-h-[130px] items-center justify-between gap-4 px-4 py-4 sm:min-h-[160px] sm:px-7">
              <span className="relative h-[64px] w-[96px] shrink-0 sm:h-[88px] sm:w-[128px]">
                <Image src={client.image} alt={client.alt} fill sizes="128px" className="object-contain" />
              </span>
              <span className="mr-2 hidden text-caption font-semibold leading-[1.7] text-text-secondary sm:block">
                <span className="text-mono text-accent">0{index + 1}</span>
                <br />
                شريك عمل
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}