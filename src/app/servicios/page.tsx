'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Wind, 
  Factory, 
  Database, 
  Zap, 
  ArrowRight, 
  Settings, 
  ShieldCheck,
  ThermometerSnowflake 
} from 'lucide-react';

const ServicesPage = () => {
  // NOTA: Los 'slug' aquí deben ser IDÉNTICOS a las llaves de SERVICES_DATA en [slug]/page.tsx
  const services = [
    {
      title: "HVAC / Climatización",
      slug: "hvac-climatizacion-industrial",
      icon: <Wind className="w-8 h-8" />,
      description: "Soluciones de confort térmico y calidad de aire para plantas industriales y edificios corporativos.",
      features: ["Sistemas VRV/VRF", "Unidades UMA", "Chillers", "Filtrado HEPA"],
      color: "border-blue-600"
    },
    {
      title: "Refrigeración Industrial",
      slug: "refrigeracion-industrial",
      icon: <Factory className="w-8 h-8" />,
      description: "Sistemas de frío de alta capacidad para procesos productivos y logística alimentaria.",
      features: ["Túneles IQF", "Cámaras Frigoríficas", "Centrales de Frío", "NH3 / CO2"],
      color: "border-orange-600"
    },
    {
      title: "Data Centers y Precisión",
      slug: "refrigeracion-precision-data-centers",
      icon: <Database className="w-8 h-8" />,
      description: "Control riguroso de temperatura y humedad para entornos críticos de IT.",
      features: ["Equipos In-Row", "Unidades CRAC", "Redundancia N+1", "Monitoreo 24/7"],
      color: "border-gray-900"
    },
    {
      title: "Sistemas de Amoníaco (NH₃)",
      slug: "sistemas-refrigeracion-amoniaco-nh3",
      icon: <ThermometerSnowflake className="w-8 h-8" />,
      description: "Ingeniería en refrigeración natural con amoníaco bajo normas internacionales de seguridad.",
      features: ["Protocolo IIAR", "Detección de Fugas", "Baja Carga NH3", "Eficiencia Energética"],
      color: "border-emerald-600"
    },
    {
      title: "Electricidad Industrial",
      slug: "electricidad-industrial",
      icon: <Zap className="w-8 h-8" />,
      description: "Infraestructura eléctrica robusta para soportar sistemas industriales de alta potencia.",
      features: ["Tableros de Fuerza", "PLC / Scada", "Calidad de Energía"],
      color: "border-yellow-500"
    },  
    {
      title: "Mantenimiento Preventivo y Predictivo",
      slug: "mantenimiento-preventivo-predictivo",
      icon: <Settings className="w-8 h-8" />,
      description: "Mantenimiento preventivo y predictivo para optimizar la vida útil de sus activos.",
      features: ["Termografía", "Análisis Vibracional", "Informes KPI", "Gestión de Activos", "Mantenimiento Preventivo", "Mantenimiento Predictivo"],
      color: "border-indigo-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Condensado */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-6xl mb-6 uppercase italic tracking-tighter font-black">
            Nuestros <span className="text-accent">Servicios</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto font-medium uppercase tracking-widest text-xs">
            Sistemas Térmicos, Eléctricos y de Climatización
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 ${service.color}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-black mb-3 uppercase tracking-tighter text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                      <ShieldCheck className="w-3 h-3 text-accent" />
                      {feat}
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[2px] hover:text-accent transition-colors"
                >
                  Ver Detalles Técnicos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;