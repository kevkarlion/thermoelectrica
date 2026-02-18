// components/ServiceGallery.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images?: string[];
};

export default function ServiceGallery({ images = [] }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const total = images.length;

  const prev = useCallback(() => {
    if (!total) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
      setIsFading(false);
    }, 150);
  }, [total]);

  const next = useCallback(() => {
    if (!total) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 150);
  }, [total]);

  // 🔥 Precarga inteligente
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
      <section className="mb-20">
        <h2 className="text-2xl font-black uppercase italic tracking-tight mb-8">
          Proyectos y Aplicaciones
        </h2>

        {/* Imagen principal */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-200 shadow-lg group bg-black">
          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`
              object-cover
              transition-opacity duration-300
              ${isFading ? "opacity-0" : "opacity-100"}
            `}
            onClick={() => setLightbox(true)}
          />

          {/* Flechas */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Miniaturas */}
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`
                relative shrink-0 
                w-28 sm:w-32 md:w-40 
                aspect-video rounded-xl 
                overflow-hidden border-2 
                transition
                ${
                  activeIndex === i
                    ? "border-primary"
                    : "border-transparent opacity-70 hover:opacity-100"
                }
              `}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="160px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6">
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt=""
              fill
              sizes="90vw"
              className="object-contain"
            />

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
