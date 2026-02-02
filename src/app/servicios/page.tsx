"use client";
import Image from "next/image";

import ServiceCard from "@/src/components/shared/ui/ServiceCard";
import {
  Thermometer,
  Snowflake,
  Target,
  AlertTriangle,
  Zap,
  Briefcase,
  CheckCircle,
  Settings,
  ArrowRight,
  ChevronRight,
  ListChecks,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "HVAC / Climatización",
      description:
        "Sistemas completos de calefacción, ventilación y aire acondicionado para entornos industriales y comerciales.",
      icon: <Thermometer className="w-8 h-8" />,
      features: [
        "Mantenimiento preventivo programado",
        "Limpieza técnica de UTAs y rooftops",
        "Diagnóstico de fallas electromecánicas",
        "Optimización de eficiencia energética",
      ],
      href: "/services/hvac",
      image: "/hvac.png",
    },
    {
      title: "Refrigeración Industrial",
      description:
        "Soluciones de frío industrial para procesos productivos y conservación de productos.",
      icon: <Snowflake className="w-8 h-8" />,
      features: [
        "Mantenimiento de compresores y condensadores",
        "Limpiezas químicas especializadas",
        "Control de refrigerantes y aceites",
        "Optimización de procesos de frío",
      ],
      href: "/services/industrial",
      image: "/refrigeracion.png",
    },
    {
      title: "Refrigeración de Precisión",
      description:
        "Control térmico exacto para sistemas críticos como data centers y salas de servidores.",
      icon: <Target className="w-8 h-8" />,
      features: [
        "Mantenimiento de equipos de precisión",
        "Ajuste fino de parámetros de operación",
        "Verificación de redundancias y alarmas",
        "Planes de continuidad operativa",
      ],
      href: "/services/precision",
      image: "/refrigeracion-precision.png",
    },
    {
      title: "Amoníaco (NH₃)",
      description:
        "Servicios especializados en plantas de refrigeración con amoníaco, con máximo foco en seguridad.",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: [
        "Inspecciones técnicas de plantas NH₃",
        "Revisión de sistemas de seguridad",
        "Diagnóstico técnico especializado",
        "Soporte en paradas programadas",
      ],
      href: "/services/ammonia",
      image: "/nh3.png",
    },
    {
      title: "Electricidad Industrial",
      description:
        "Soluciones eléctricas completas para garantizar seguridad y continuidad operativa.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Mantenimiento de tableros eléctricos",
        "Instalaciones eléctricas industriales",
        "Diagnóstico de fallas eléctricas",
        "Optimización energética",
      ],
      href: "/services/electricity",
      image: "/electricidad-ind.png",
    },
    {
      title: "Consultoría Técnica",
      description:
        "Asesoramiento especializado para optimización y modernización de sistemas.",
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        "Auditorías energéticas integrales",
        "Estudios de viabilidad técnica",
        "Diseño y planificación de proyectos",
        "Capacitación del personal técnico",
      ],
      href: "/services/consulting",
      image: "/consulta-tecnica.png",
    },
  ];

  return (
    <section
      id="services"
      className="
    section-padding
    relative overflow-hidden
    bg-gradient-to-b from-gray-50 via-white to-gray-50
  "
    >
      <div className="container-custom">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-br from-gray-900 to-gray-800  rounded-xl mb-6 border border-primary/20">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Nuestros Servicios
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Soluciones Técnicas{" "}
            <span className="text-primary">Especializadas</span>
          </h2>
        </div>

        {/* Grid de Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 200} />
          ))}
        </div>

        {/* NUEVO CTA - Conoce Todos Nuestros Servicios */}
        <div className="mt-16">
          {/* CTA Principal */}
          <div className="relative rounded-xl overflow-hidden p-8">
            {/* Imagen de fondo optimizada con Next.js Image */}
            <div className="absolute inset-0">
              <Image
                src="/img-cta.png" // Cambia por tu imagen
                alt="Fondo servicios técnicos"
                fill
                className="object-cover"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
                  <ListChecks className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Listo para conocer nuestros servicios?
                </h3>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Descubra nuestros servicios técnicos especializados con
                  información detallada y casos de éxito documentados.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                <Link
                  href="/services/all"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-md"
                >
                  <span>Ver Servicios Completos</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-medium px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition-all"
                >
                  <span>Solicitar Cotización</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Separador elegante */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-black/40 backdrop-blur-sm px-4 text-xs text-white/70">
                    INCLUYE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="inline-flex w-10 h-10 items-center justify-center bg-white/10 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="font-medium text-white text-sm">
                    Especificaciones técnicas
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex w-10 h-10 items-center justify-center bg-white/10 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                    <Settings className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="font-medium text-white text-sm">
                    Casos de éxito
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex w-10 h-10 items-center justify-center bg-white/10 rounded-lg mb-2 mx-auto backdrop-blur-sm">
                    <Briefcase className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="font-medium text-white text-sm">
                    Testimonios verificados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección CTA Original (Mantenida pero menos prominente) */}
        <div className="mt-16">
          <div className="bg-linear-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/10 rounded-2xl p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ¿Necesita una solución personalizada?
                </h3>
                <p className="text-gray-600 mb-6">
                  Cada proyecto industrial es único. Contáctenos para una
                  evaluación personalizada y desarrollemos juntos la solución
                  perfecta.
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
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="group text-center p-10 rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-extrabold text-[var(--color-primary)] mb-3 tracking-tight">
              15+
            </div>
            <div className="text-gray-800 font-semibold text-lg">
              Años de experiencia
            </div>
          </div>

          <div className="group text-center p-10 rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-extrabold text-[var(--color-primary)] mb-3 tracking-tight">
              500+
            </div>
            <div className="text-gray-800 font-semibold text-lg">
              Proyectos ejecutados
            </div>
          </div>

          <div className="group text-center p-10 rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-extrabold text-[var(--color-primary)] mb-3 tracking-tight">
              24/7
            </div>
            <div className="text-gray-800 font-semibold text-lg">
              Soporte técnico
            </div>
          </div>
        </div>

        {/* Nota final */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 text-sm font-medium shadow-sm">
            <span className="text-[var(--color-primary)] font-semibold">✔</span>
            Todos nuestros servicios incluyen garantía, personal certificado y
            seguimiento post-intervención.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
