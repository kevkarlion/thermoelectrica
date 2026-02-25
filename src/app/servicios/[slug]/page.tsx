/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Activity
} from 'lucide-react';

import ServiceGallery from '@/src/components/shared/ui/ServiceGallery/ServiceGalery';

const SERVICES_DATA: any = {
  "hvac-climatizacion-industrial": {
    title: "HVAC / Climatización",
    subtitle: "Confort Térmico y Calidad de Aire Industrial",
    description: "Sistemas avanzados de calefacción, ventilación y aire acondicionado bajo estándares ASHRAE.",
    specs: [
      { label: "Sistemas", value: "VRF / Chiller / UMA" },
      { label: "Filtrado", value: "HEPA / F9" },
      { label: "Control", value: "BMS / Modbus" },
      { label: "Eficiencia", value: "SEER 20+" }
    ],
    features: [
      "Instalación de Chillers",
      "Mantenimiento UMA",
      "Balanceo de caudales",
      "Sistemas VRV"
    ],
    images: [
      "/services/hvac/hvac.webp",
      "/services/hvac/hvac1.webp",
      "/services/hvac/hvac2.webp",
      "/services/hvac/hvac3.webp",
      "/services/hvac/hvac4.webp",
      "/services/hvac/hvac5.webp",
      "/services/hvac/hvac6.webp"
    ]
  },

  "refrigeracion-industrial": {
    title: "Refrigeración Industrial",
    subtitle: "Continuidad Crítica en Cadena de Frío",
    description: "Ingeniería aplicada a procesos que requieren potencias frigoríficas elevadas.",
    specs: [
      { label: "Rango", value: "-40°C a +15°C" },
      { label: "Fluidos", value: "R404 / R507 / CO2" },
      { label: "Potencia", value: "Hasta 2000kW" },
      { label: "Seguridad", value: "ASHRAE 15" }
    ],
    features: [
      "Centrales de frío",
      "Túneles IQF",
      "Compresores de tornillo",
      "Optimización energética"
    ],
    images: [
      "/services/industrial/ind.webp",
      "/services/industrial/ind1.webp",
      "/services/industrial/ind2.webp",
      "/services/industrial/ind3.webp",
      "/services/industrial/ind4.webp",
      "/services/industrial/ind5.webp",
      "/services/industrial/ind6.webp",
      "/services/industrial/ind7.webp",
      "/services/industrial/ind8.webp",
      "/services/industrial/ind9.webp",
      "/services/industrial/ind10.webp",
    ]
  },

  "refrigeracion-precision-data-centers": {
    title: "Data Centers / Precisión",
    subtitle: "Control de Entornos Críticos",
    description: "Soluciones de enfriamiento para infraestructura de IT donde la continuidad es la prioridad.",
    specs: [
      { label: "Precisión", value: "±0.5°C / ±2% HR" },
      { label: "Tipo", value: "In-Row / Perimetral" },
      { label: "Redundancia", value: "N+1 / 2N" },
      { label: "Monitoreo", value: "Remoto 24/7" }
    ],
    features: [
      "Unidades CRAC",
      "Contención de pasillos",
      "Auditorías térmicas",
      "Respuesta inmediata"
    ],
    images: [
      "/services/precision/pre.webp",
      "/services/precision/pre1.webp",
      "/services/precision/pre2.webp",
      "/services/precision/pre3.webp",
      "/services/precision/pre4.webp",
      "/services/precision/pre5.webp",
      "/services/precision/pre6.webp",
      "/services/precision/pre7.webp",
      "/services/precision/pre8.webp",
      "/services/precision/pre9.webp",
    ]
  },

  "sistemas-refrigeracion-amoniaco-nh3": {
    title: "Sistemas de Amoníaco (NH₃)",
    subtitle: "Ingeniería en Refrigeración Natural",
    description: "Especialistas en el manejo de NH₃ para grandes capacidades industriales.",
    specs: [
      { label: "Seguridad", value: "IIAR" },
      { label: "Detección", value: "Electroquímicos" },
      { label: "Expertise", value: "Mantenimiento Mayor" },
      { label: "Carga", value: "Baja Carga NH3" }
    ],
    features: [
      "Certificación de recipientes",
      "Válvulas de seguridad",
      "Capacitación",
      "Auditorías IIAR"
    ],
    images: [
      "/services/amoniaco/amo.webp",
      "/services/amoniaco/amo1.webp",
      "/services/amoniaco/amo2.webp",
      "/services/amoniaco/amo3.webp",
      "/services/amoniaco/amo4.webp",
      "/services/amoniaco/amo5.webp",
      "/services/amoniaco/amo6.webp",
      "/services/amoniaco/amo7.webp",
      "/services/amoniaco/amo8.webp",
      "/services/amoniaco/amo9.webp",
    ]
  },

  "electricidad-industrial": {
    title: "Electricidad Industrial",
    subtitle: "Potencia y Control de Infraestructura",
    description: "Sistemas eléctricos industriales diseñados para alta disponibilidad.",
    specs: [
      { label: "Tensión", value: "Media y Baja" },
      { label: "Control", value: "PLC / Scada" },
      { label: "Protección", value: "IP65 / NEMA" },
      { label: "Respaldo", value: "UPS / Grupos" }
    ],
    features: [
      "Tableros de transferencia",
      "Canalización robusta",
      "Automatismos"
    ],
    images: [
      "/services/electricidad/elec.webp",
      "/services/electricidad/elec1.webp",
      "/services/electricidad/elec2.webp",
      "/services/electricidad/elec3.webp",
      "/services/electricidad/elec4.webp",
      "/services/electricidad/elec5.webp",
      "/services/electricidad/elec6.webp",
      "/services/electricidad/elec7.webp",
      "/services/electricidad/elec8.webp",
      "/services/electricidad/elec9.webp"
    ]
  },

  "mantenimiento-preventivo-predictivo": {
    title: "Mantenimiento Preventivo y Predictivo",
    subtitle: "Gestión Inteligente de Activos",
    description: "Mantenimiento preventivo y predictivo para optimizar la vida útil de sus activos.",
    specs: [
      { label: "Técnica", value: "Termografía / Vibración" },
      { label: "Frecuencia", value: "Basada en Condición" },
      { label: "Informes", value: "KPI / Trazabilidad" }, 
      { label: "Software", value: "CMMS" }
    ],
    features: [
      "Análisis termográfico",
      "Megado de bobinados en motores",
      "Análisis de aceite",
      "Informes técnicos"
    ],
    images: [
      "/services/mantenimiento/man.webp",
      "/services/mantenimiento/man2.webp",
      "/services/mantenimiento/man3.webp",
      "/services/mantenimiento/man4.webp",
      "/services/mantenimiento/man5.webp",
      "/services/mantenimiento/man6.webp",
      "/services/mantenimiento/man7.webp",
      "/services/mantenimiento/man8.webp",
      "/services/mantenimiento/man9.webp",
      "/services/mantenimiento/man10.webp",
      "/services/mantenimiento/man11.webp",
      "/services/mantenimiento/man12.webp"
    ]
  }
};


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) return { title: "No encontrado" };
  return { title: `${data.title} | Thermolectrica` };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container-custom">
        <Link 
          href="/servicios" 
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:text-accent transition-colors"
        >
          <ArrowLeft size={20} /> VOLVER A SERVICIOS
        </Link>
        
        <div className="max-w-5xl">
          <span className="text-accent font-black tracking-widest uppercase text-sm">
            Ingeniería Especializada
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-gray-950 mt-4 mb-6 uppercase italic tracking-tighter leading-none">
            {data.title}
          </h1>

          <p className="text-2xl text-primary font-bold mb-8 italic">
            {data.subtitle}
          </p>

          <p className="text-gray-600 text-xl leading-relaxed mb-16">
            {data.description}
          </p>

          {/* GALERÍA */}
          <ServiceGallery images={data.images} />

          {/* SPECS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-20">
            {data.specs.map((spec: any, i: number) => (
              <div key={i}>
                <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">
                  {spec.label}
                </p>
                <p className="text-sm font-bold text-gray-900 uppercase">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase italic tracking-tight flex items-center gap-3">
              <Activity className="text-accent" /> Alcance del Trabajo
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {data.features.map((f: string, i: number) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-gray-700 font-medium">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
