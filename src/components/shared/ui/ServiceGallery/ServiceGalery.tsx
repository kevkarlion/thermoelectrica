// components/ServiceGallery.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images?: string[];
};

export default function ServiceGallery({ images = [] }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const thumbsRef = useRef<HTMLDivElement>(null);
  const total = images.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const prev = useCallback(() => {
    if (!total) return;
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const next = useCallback(() => {
    if (!total) return;
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // 👉 Auto scroll de miniaturas (lo que te faltaba)
  useEffect(() => {
    if (!thumbsRef.current) return;

    const container = thumbsRef.current;
    const activeThumb = container.children[activeIndex] as HTMLElement;

    if (activeThumb) {
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const containerWidth = container.offsetWidth;

      const scrollTo =
        thumbLeft - containerWidth / 2 + thumbWidth / 2;

      container.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Precarga inteligente (sin parpadeos)
  useEffect(() => {
    if (!total) return;

    const preload = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;
    const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;

    preload(images[nextIndex]);
    preload(images[prevIndex]);
  }, [activeIndex, images, total]);

  // Navegación con teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  if (!total) return null;

  return (
    <>
      <section className="mb-20 w-full">
        <h2 className="text-2xl font-black uppercase italic tracking-tight mb-8">
          Proyectos y Aplicaciones
        </h2>

        {/* Imagen principal (SIN fondo negro y SIN fade feo) */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white">
          <Image
            src={images[activeIndex]}
            alt={`Imagen ${activeIndex + 1}`}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-500 ease-out"
            onClick={() => setLightbox(true)}
          />

          {/* Flecha izquierda */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Flecha derecha */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Contador elegante */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-semibold">
            {activeIndex + 1} / {total}
          </div>
        </div>

        {/* Miniaturas centradas y auto-scroll */}
        <div
          ref={thumbsRef}
          className="mt-6 flex gap-3 overflow-x-auto pb-2 scroll-smooth"
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`
                relative shrink-0 
                w-24 sm:w-28 md:w-32 lg:w-36 
                aspect-video rounded-xl 
                overflow-hidden border-2 
                transition-all duration-300
                ${
                  activeIndex === i
                    ? "border-primary scale-105 shadow-md"
                    : "border-gray-200 opacity-80 hover:opacity-100"
                }
              `}
            >
              <Image
                src={src}
                alt={`Miniatura ${i + 1}`}
                fill
                sizes="150px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox (vista grande) */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6">
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-7xl aspect-video">
            <Image
              src={images[activeIndex]}
              alt={`Imagen grande ${activeIndex + 1}`}
              fill
              sizes="95vw"
              className="object-contain"
            />

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-4 rounded-full shadow-lg transition"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-4 rounded-full shadow-lg transition"
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
