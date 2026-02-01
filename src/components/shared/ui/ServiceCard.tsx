'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
  colorClass: string;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  href, 
  colorClass,
  delay = 0 
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-up');
              entry.target.classList.remove('opacity-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`service-card ${colorClass} opacity-0`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <Link 
          href={href}
          className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
        >
          →
        </Link>
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[var(--color-text-light)] mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full flex-shrink-0"></div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline"
      >
        Ver detalles del servicio
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;