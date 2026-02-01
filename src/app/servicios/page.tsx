import ServiceCard from '@/src/components/shared/ui/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'HVAC / Climatización',
      description: 'Mantenimiento, diagnóstico y optimización de sistemas de climatización para entornos industriales y comerciales.',
      icon: '⚙️',
      features: [
        'Mantenimiento preventivo programado',
        'Limpieza técnica de UTAs y rooftops',
        'Diagnóstico de fallas electromecánicas',
        'Optimización de eficiencia operativa'
      ],
      href: '/services/hvac',
      colorClass: 'bg-blue-50 border-l-[4px] border-[var(--color-primary)]'
    },
    {
      title: 'Refrigeración Industrial',
      description: 'Soporte técnico especializado en sistemas de refrigeración para procesos productivos.',
      icon: '❄️',
      features: [
        'Mantenimiento preventivo y correctivo',
        'Diagnóstico de fallas industriales',
        'Limpiezas químicas y técnicas',
        'Optimización de procesos de frío'
      ],
      href: '/services/industrial',
      colorClass: 'bg-cyan-50 border-l-[4px] border-cyan-600'
    },
    {
      title: 'Refrigeración de Precisión',
      description: 'Mantenimiento y soporte técnico para sistemas críticos que requieren control térmico continuo.',
      icon: '🎯',
      features: [
        'Mantenimiento preventivo especializado',
        'Diagnóstico de fallas críticas',
        'Ajuste fino de parámetros',
        'Planes de continuidad operativa'
      ],
      href: '/services/precision',
      colorClass: 'bg-purple-50 border-l-[4px] border-purple-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-sm font-semibold rounded-full mb-4">
            Servicios Especializados
          </span>
          <h2 className="mb-4">Soluciones Técnicas Industriales</h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            Brindamos servicios técnicos confiables en sistemas térmicos y eléctricos, 
            garantizando funcionamiento eficiente y seguro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional services row */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className={`service-card border-l-[4px] border-[var(--color-accent)]`}>
            <div className="text-3xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold mb-3">Amoníaco (NH₃)</h3>
            <p className="text-[var(--color-text-light)] mb-4">
              Servicios técnicos especializados en plantas de refrigeración con amoníaco, 
              con foco en seguridad y confiabilidad.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div>
                <span>Inspecciones técnicas de plantas</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></div>
                <span>Revisión de sistemas de seguridad</span>
              </li>
            </ul>
            <a href="/services/ammonia" className="text-[var(--color-accent)] font-semibold hover:underline">
              Ver detalles →
            </a>
          </div>

          <div className={`service-card border-l-[4px] border-yellow-600`}>
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Electricidad Industrial</h3>
            <p className="text-[var(--color-text-light)] mb-4">
              Servicios eléctricos especializados para garantizar la seguridad, 
              control y continuidad en entornos industriales.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                <span>Mantenimiento de tableros eléctricos</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                <span>Diagnóstico de fallas y optimización</span>
              </li>
            </ul>
            <a href="/services#electricity" className="text-yellow-600 font-semibold hover:underline">
              Ver detalles →
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl">
            <div className="bg-white px-8 py-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">¿Necesita una solución específica?</h3>
              <p className="text-[var(--color-text-light)] mb-4">
                Contáctenos para una evaluación técnica personalizada
              </p>
              <a 
                href="/contact" 
                className="btn-primary inline-block"
              >
                Solicitar Consulta Técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;