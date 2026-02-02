'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CheckCircle, Info, Clock, Shield, Zap } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  benefits?: string[];
  responseTime?: string;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  image,
  benefits = [],
  responseTime = "24-48 horas",
  delay = 0 
}: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Verificar si es mobile solo en el cliente
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const handleMouseEnter = () => {
    if (!isMobile && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setIsFlipped(false), 300);
    }
  };

  const handleCardClick = () => {
    if (isMobile) setIsFlipped(!isFlipped);
  };

  return (
    <div 
      ref={cardRef}
      className={`relative w-full h-112.5 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-500`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className={`relative w-full h-full transition-all duration-500 ${isFlipped ? 'scale-95' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        
        {/* FRONT - Vista principal con imagen */}
        <div 
          className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 ${
            isFlipped 
              ? 'opacity-0 scale-90 pointer-events-none' 
              : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col p-6 text-white">
            <div className="mb-4">
              <div className="inline-flex p-2 bg-orange-500/10 rounded-lg">
                <div className="text-2xl text-orange-500">{icon}</div>
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-white/90 mb-6 line-clamp-2">{description}</p>
              
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>{responseTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span>Garantía</span>
                </div>
              </div>
              
              {!isMobile && (
                <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                  <Info className="w-4 h-4 text-orange-400" />
                  <span>Pase el cursor para más información</span>
                </div>
              )}
              
              {isMobile && (
                <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                  <Info className="w-4 h-4 text-orange-400" />
                  <span>Toque para más información</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* BACK - Información detallada */}
        <div 
          className={`absolute inset-0 rounded-2xl overflow-hidden bg-primary border border-gray-800 shadow-2xl p-6 transition-all duration-500 ${
            isFlipped 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Contenedor principal con scroll si es necesario */}
            <div className="flex-1 overflow-y-auto pr-1">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 bg-orange-500/20 rounded-lg">
                    <div className="text-xl text-orange-500">{icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6">{description}</p>
              </div>
              
              {/* Características principales */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-400">Características principales</span>
                </h4>
                <div className="space-y-2">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Beneficios */}
              {benefits.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-400">Beneficios</span>
                  </h4>
                  <div className="space-y-2">
                    {benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Información técnica FIJA en el bottom */}
            <div className="pt-4 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Respuesta</div>
                  <div className="font-semibold text-white text-sm">{responseTime}</div>
                </div>
                <div className="text-center p-3 bg-gray-900/50 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Cobertura</div>
                  <div className="font-semibold text-white text-sm">24/7</div>
                </div>
              </div>
              
              {isMobile && (
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-500">Toque para volver</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;