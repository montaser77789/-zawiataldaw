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
    <section className="section px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center lg:gap-14">
        <div className="lg:py-8">
          <p className="section-label">05 / أثر الضوء</p>
          <h2 className="section-title">فرقٌ يظهر على الطريق</h2>
          <p className="mt-5 max-w-[450px] text-body text-text-secondary sm:text-body-lg lg:mt-7">
            قارن بين مشهد الطريق قبل الإنارة وبعدها بتحريك المؤشر عبر الصورة.
          </p>
          <div className="mt-8 flex items-center gap-5 text-caption font-semibold text-text-secondary sm:mt-10 sm:text-body-sm">
            <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-ink" /> قبل</span>
            <span className="h-px w-12 bg-red" />
            <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-red" /> بعد</span>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative h-[320px] select-none overflow-hidden rounded-xl bg-ink sm:h-[460px] lg:h-[560px]"
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
          <span className="absolute bottom-4 right-4 rounded-lg bg-ink/90 px-4 py-2.5 text-caption font-semibold text-white backdrop-blur-sm sm:bottom-6 sm:right-6">مقارنة بصرية</span>
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
            className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-2 border-red bg-white text-accent shadow-lg transition-transform hover:scale-110 sm:h-14 sm:w-14"
          >
            <BsChevronRight /><BsChevronLeft />
          </button>
        </div>
      </div>
    </section>
  );
}