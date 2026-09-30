import Image from "next/image";
import { clients } from "../data/heroData";

export default function Clients() {
  return (
    <section className="border-t border-border px-4 py-14 sm:px-7 sm:py-18 lg:py-20">
      <div className="mx-auto grid max-w-[1500px] gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-center lg:gap-16">
        <div>
          <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
            <span className="h-[2px] w-8 bg-primary" /> جهات من سجل الأعمال
          </p>
          <h2 className="text-[26px] font-bold leading-[1.45] text-text-primary sm:text-[32px]">جهاتٌ نعتز بالعمل معها</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {clients.map((client, index) => (
            <div key={client.id} className="flex min-h-[120px] items-center justify-between border border-border bg-white px-4 py-4 sm:min-h-[150px] sm:px-7">
              <div className="relative h-[70px] w-[100px] shrink-0 sm:h-[90px] sm:w-[130px]">
                <Image src={client.image} alt={client.alt} fill sizes="130px" className="object-contain" />
              </div>
              <span className="mr-2 hidden text-[12px] font-semibold leading-[1.7] text-text-secondary sm:block">0{index + 1}<br />شريك عمل</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
