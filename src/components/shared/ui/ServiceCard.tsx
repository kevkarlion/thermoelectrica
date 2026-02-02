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
    
    // Verificar inicialmente
    checkMobile();
    
    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  // Hover automático solo en desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsFlipped(false);
      }, 300);
    }
  };

  // Click solo en mobile
  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`relative w-full h-[400px] ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-500`}
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
          className={`absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200 transition-all duration-500 ${
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col p-6 text-white">
            <div className="mb-4">
              <div className="text-3xl">{icon}</div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-white/90 mb-6 line-clamp-2">{description}</p>
              
              {/* Información adicional en el frente */}
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{responseTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Garantía</span>
                </div>
              </div>
              
              {/* Indicador de hover - Solo muestra en desktop */}
              {!isMobile && (
                <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                  <Info className="w-4 h-4" />
                  <span>Pase el cursor para más información</span>
                </div>
              )}
              
              {/* Indicador para mobile */}
              {isMobile && (
                <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                  <Info className="w-4 h-4" />
                  <span>Toque para más información</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* BACK - Información detallada */}
        <div 
          className={`absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl p-6 transition-all duration-500 ${
            isFlipped 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Header con icono y título */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl text-gray-700">{icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
            
            {/* Sección de características principales */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[var(--color-accent)]" />
                Características principales
              </h4>
              <div className="space-y-2">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sección de beneficios (si existen) */}
            {benefits.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  Beneficios
                </h4>
                <div className="space-y-2">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Información técnica adicional */}
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 bg-gray-100 rounded-lg">
                  <div className="text-xs text-gray-500">Respuesta</div>
                  <div className="font-semibold text-gray-800">{responseTime}</div>
                </div>
                <div className="text-center p-2 bg-gray-100 rounded-lg">
                  <div className="text-xs text-gray-500">Cobertura</div>
                  <div className="font-semibold text-gray-800">24/7</div>
                </div>
              </div>
              
              {/* Instrucción para mobile */}
              {isMobile && (
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-500">Toque para volver a la imagen</span>
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