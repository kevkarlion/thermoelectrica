'use client';

import ServiceCard from '@/src/components/shared/ui/ServiceCard';
import { Thermometer, Snowflake, Target, AlertTriangle, Zap, Briefcase, CheckCircle, Settings, ArrowRight, ChevronRight, ListChecks } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'HVAC / Climatización',
      description: 'Sistemas completos de calefacción, ventilación y aire acondicionado para entornos industriales y comerciales.',
      icon: <Thermometer className="w-8 h-8" />,
      features: [
        'Mantenimiento preventivo programado',
        'Limpieza técnica de UTAs y rooftops',
        'Diagnóstico de fallas electromecánicas',
        'Optimización de eficiencia energética'
      ],
      href: '/services/hvac',
      image: '/hvac.png'
    },
    {
      title: 'Refrigeración Industrial',
      description: 'Soluciones de frío industrial para procesos productivos y conservación de productos.',
      icon: <Snowflake className="w-8 h-8" />,
      features: [
        'Mantenimiento de compresores y condensadores',
        'Limpiezas químicas especializadas',
        'Control de refrigerantes y aceites',
        'Optimización de procesos de frío'
      ],
      href: '/services/industrial',
      image: '/refrigeracion.png'
    },
    {
      title: 'Refrigeración de Precisión',
      description: 'Control térmico exacto para sistemas críticos como data centers y salas de servidores.',
      icon: <Target className="w-8 h-8" />,
      features: [
        'Mantenimiento de equipos de precisión',
        'Ajuste fino de parámetros de operación',
        'Verificación de redundancias y alarmas',
        'Planes de continuidad operativa'
      ],
      href: '/services/precision',
      image: '/refrigeracion-precision.png'
    },
    {
      title: 'Amoníaco (NH₃)',
      description: 'Servicios especializados en plantas de refrigeración con amoníaco, con máximo foco en seguridad.',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: [
        'Inspecciones técnicas de plantas NH₃',
        'Revisión de sistemas de seguridad',
        'Diagnóstico técnico especializado',
        'Soporte en paradas programadas'
      ],
      href: '/services/ammonia',
      image: '/nh3.png'
    },
    {
      title: 'Electricidad Industrial',
      description: 'Soluciones eléctricas completas para garantizar seguridad y continuidad operativa.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Mantenimiento de tableros eléctricos',
        'Instalaciones eléctricas industriales',
        'Diagnóstico de fallas eléctricas',
        'Optimización energética'
      ],
      href: '/services/electricity',
      image: '/electricidad-ind.png'
    },
    {
      title: 'Consultoría Técnica',
      description: 'Asesoramiento especializado para optimización y modernización de sistemas.',
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        'Auditorías energéticas integrales',
        'Estudios de viabilidad técnica',
        'Diseño y planificación de proyectos',
        'Capacitación del personal técnico'
      ],
      href: '/services/consulting',
      image: '/consulta-tecnica.png'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container-custom">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full mb-6 border border-[var(--color-primary)]/20">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider">
              Nuestros Servicios
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones Técnicas <span className="text-[var(--color-primary)]">Especializadas</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nuestra gama completa de servicios técnicos industriales. 
            <span className="block mt-2 text-sm text-gray-500">
              💡 Pase el cursor sobre las cards o haga click para ver detalles
            </span>
          </p>
        </div>
        
        {/* Grid de Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>

        {/* NUEVO CTA - Conoce Todos Nuestros Servicios */}
        <div className="mt-16 text-center">
          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 rounded-full flex items-center justify-center">
                <ListChecks className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
            </div>
            
            {/* CTA Principal */}
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ¿Listo para conocer todos nuestros servicios en detalle?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore cada servicio con información completa, casos de éxito, 
                especificaciones técnicas y testimonios de clientes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services/all"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105 group"
                >
                  <span>Conoce Todos Nuestros Servicios</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[var(--color-primary)] font-bold text-lg px-8 py-4 rounded-xl border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-105 group"
                >
                  <span>Solicitar Cotización</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Beneficios adicionales */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">Especificaciones técnicas detalladas</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">Casos de éxito reales</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">Testimonios verificados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección CTA Original (Mantenida pero menos prominente) */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/10 rounded-2xl p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ¿Necesita una solución personalizada?
                </h3>
                <p className="text-gray-600 mb-6">
                  Cada proyecto industrial es único. Contáctenos para una evaluación 
                  personalizada y desarrollemos juntos la solución perfecta.
                </p>
              </div>
              
              <div className="text-center lg:text-right">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white font-semibold text-lg px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-[var(--color-accent)]/20 transition-all duration-300 hover:scale-105 group"
                >
                  <span>Solicitar Evaluación Técnica</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-gray-500 text-sm mt-3">
                  Diagnóstico inicial sin costo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">15+</div>
            <div className="text-gray-700 font-medium">Años de experiencia</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">500+</div>
            <div className="text-gray-700 font-medium">Proyectos ejecutados</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Soporte técnico</div>
          </div>
        </div>

        {/* Nota final */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Todos nuestros servicios incluyen garantía, personal certificado y seguimiento post-intervención.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;