"use client";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/src/components/shared/ui/ServiceCard";
import {
  Thermometer,
  Snowflake,
  Target,
  AlertTriangle,
  Zap,
  CheckCircle,
  Settings,
  ArrowRight,
  ChevronRight,
  ListChecks,
  ClipboardCheck,
  Shield,
} from "lucide-react";

const ServiciosHome = () => {
  const services = [
    {
      title: "HVAC / Climatización",
      description:
        "Sistemas completos de calefacción, ventilación y aire acondicionado para entornos industriales y comerciales.",
      icon: <Thermometer className="w-8 h-8" />,
      features: [
        "Mantenimiento preventivo programado",
        "Limpieza técnica de UTAs y rooftops",
        "Diagnostico de fallas térmicas y electromecánicas",
        "Mejora de rendimiento y consumo del sistema",
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
        "Mantenimiento de compresores, evaporadores y condensadores",
        "Limpiezas químicas especializadas",
        "Control de refrigerantes y aceites",
        "Mejora del rendimiento del sistema de refrigeración",
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
        "Ajuste y puesta a punto de parámetros de operación",
        "Verificación de redundancias y alarmas",
        "Chequeo de respaldo, redundancias y alarmas",
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
        "Diagnostico técnico especializado en plantas NH3",
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
        "Corrección de consumos y perdidas eléctricas",
      ],
      href: "/services/electricity",
      image: "/electricidad-ind.png",
    },
    {
      title: "Diagnóstico Técnico en Sitio",
      description:
        "Evaluación presencial y relevamiento detallado para determinar el estado real y la optimización de sus instalaciones.",
      icon: <ClipboardCheck className="w-8 h-8" />,
      features: [
        "Evaluación de estado operativo de equipos",
        "Análisis de fallas y causa raíz",
        "Recomendaciones técnicas aplicables",
        "Soporte para decisiones de mantenimiento",
      ],
      href: "/services/diagnostico",
      image: "/consulta-tecnica.png",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="container-custom">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gray-900 rounded-xl mb-6 border border-white/10">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Ingeniería en Mantenimiento
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Soluciones Técnicas{" "}
            <span className="text-accent italic font-black">
              Especializadas
            </span>
          </h2>
        </div>

        {/* Grid de Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>

        {/* BLOQUE CTA REFORMULADO */}
        <div className="mt-24 relative rounded-3xl overflow-hidden p-8 md:p-16 border border-gray-200 shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/img-cta.png"
              alt="Mantenimiento Industrial"
              fill
              className="object-cover opacity-80" // Subimos al 80% para que se vea casi total
              quality={100}
              priority
            />
            {/* Overlay degradado: más oscuro a la izquierda (para el texto) y más claro a la derecha */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />

            {/* Capa de tinte azul/oscuro opcional para dar profundidad industrial */}
            <div className="absolute inset-0 bg-oxford/30 mix-blend-multiply" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6 border border-accent/30">
                <ListChecks className="w-8 h-8 text-accent" />
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
                ¿Listo para conocer nuestros servicios?
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Garantice la operatividad de su planta con planes de
                mantenimiento diseñados por expertos en sistemas industriales
                complejos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-dark text-black font-black uppercase tracking-widest px-10 py-5 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/services/all"
                  className="bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-widest px-10 py-5 rounded-xl transition-all hover:bg-white/10 flex items-center justify-center gap-3"
                >
                  Explorar Catálogo
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="text-center group">
                <div className="text-3xl font-black text-accent mb-2 italic">
                  15+ Años
                </div>
                <div className="text-white font-bold uppercase text-sm tracking-widest mb-2">
                  Experiencia Técnica
                </div>
                <p className="text-white/50 text-xs">
                  Mantenimiento y operación profesional en entornos de alta
                  exigencia.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex mb-3">
                  <Shield className="text-accent w-8 h-8" />
                </div>
                <div className="text-white font-bold uppercase text-sm tracking-widest mb-2">
                  Proyectos Complejos
                </div>
                <p className="text-white/50 text-xs">
                  Trayectoria comprobada en la ejecución de sistemas
                  industriales integrales.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex mb-3">
                  <Settings className="text-accent w-8 h-8" />
                </div>
                <div className="text-white font-bold uppercase text-sm tracking-widest mb-2">
                  Respaldo Técnico
                </div>
                <p className="text-white/50 text-xs">
                  Documentación de procesos y cumplimiento de normativas
                  vigentes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer de Sección: Eliminado 24/7 y Diagnósticos Gratuitos */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm font-semibold italic">
            <CheckCircle className="w-5 h-5 text-accent" />
            Compromiso con la eficiencia energética y la continuidad
            operacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHome;
