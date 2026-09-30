"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const update = (clientX: number, rect: DOMRect) => {
    const value = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, value)));
  };

  const move = (clientX: number) => {
    if (!dragging.current || !containerRef.current) return;
    update(clientX, containerRef.current.getBoundingClientRect());
  };

  return (
    <section className="px-3 py-16 sm:px-5 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center lg:gap-14">
        <div className="lg:py-8">
          <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] text-text-secondary sm:text-[13px]">
            <span className="h-[2px] w-8 bg-primary" /> 05 / أثر الضوء
          </p>
          <h2 className="text-[34px] font-bold leading-[1.3] text-text-primary sm:text-[44px] lg:text-[52px]">فرقٌ يظهر على الطريق</h2>
          <p className="mt-5 max-w-[450px] text-[15px] leading-[2] text-text-secondary sm:text-[17px] lg:mt-7">
            قارن بين مشهد الطريق قبل الإنارة وبعدها بتحريك المؤشر عبر الصورة.
          </p>
          <div className="mt-8 flex items-center gap-5 text-[12px] font-semibold sm:mt-10 sm:text-[13px]">
            <span className="flex items-center gap-2"><i className="h-2 w-2 bg-black" /> قبل</span>
            <span className="h-px w-10 bg-primary" />
            <span className="flex items-center gap-2"><i className="h-2 w-2 bg-primary" /> بعد</span>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative h-[320px] select-none overflow-hidden bg-black sm:h-[460px] lg:h-[560px]"
          onMouseMove={(event) => move(event.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(event) => move(event.touches[0].clientX)}
          onTouchEnd={() => (dragging.current = false)}
        >
          <Image src="/compare/after.jpg" alt="طريق مضاء عند الغروب" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
          <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}>
            <Image src="/compare/before.jpg" alt="الطريق قبل الإنارة" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
          </div>
          <span className="absolute bottom-4 right-4 bg-black/65 px-3 py-2 text-[11px] font-semibold text-white sm:bottom-6 sm:right-6 sm:px-4 sm:text-[12px]">مقارنة بصرية</span>
          <div className="absolute bottom-0 top-0 w-[2px] bg-white" style={{ left: `${position}%` }} />
          <button
            type="button"
            onMouseDown={() => (dragging.current = true)}
            onTouchStart={() => (dragging.current = true)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") setPosition((value) => Math.max(0, value - 3));
              if (event.key === "ArrowRight") setPosition((value) => Math.min(100, value + 3));
            }}
            style={{ left: `${position}%` }}
            role="slider"
            aria-label="مقارنة الطريق قبل وبعد الإنارة"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-primary bg-white text-primary shadow-lg sm:h-14 sm:w-14"
          >
            <BsChevronRight /><BsChevronLeft />
          </button>
        </div>
      </div>
    </section>
  );
}
