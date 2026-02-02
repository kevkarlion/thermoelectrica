'use client';

import { Phone, Mail, Calendar, CheckCircle, ShoppingBag, Heart, Factory, Building } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  const benefits = [
    'Diagnóstico técnico gratuito',
    'Respuesta en menos de 24 horas',
    'Personal técnico certificado',
    'Garantía en todos los servicios',
    'Soporte 24/7 para emergencias',
    'Presupuesto sin compromiso',
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-semibold rounded-full mb-4">
              Listo para comenzar
            </span>
            <h2 className="mb-4">Solicite su evaluación técnica</h2>
            <p className="text-[var(--color-text-light)] text-lg max-w-3xl mx-auto">
              Nuestro equipo de especialistas está listo para atender sus necesidades en sistemas térmicos, 
              eléctricos y de climatización. Garantizamos soluciones confiables y eficientes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Benefits and Contact Options */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">¿Por qué elegir Thermolectrica?</h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-[var(--color-text)]">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold mb-4">Métodos de contacto</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="tel:+5491112345678"
                      className="flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 group"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Llamar ahora</span>
                    </a>
                    
                    <a
                      href="mailto:info@thermolectrica.com"
                      className="flex items-center justify-center gap-2 bg-white border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 group"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Enviar email</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--color-primary)] text-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-sm opacity-90">Tiempo operativo</div>
                </div>
                <div className="bg-[var(--color-accent)] text-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">4h</div>
                  <div className="text-sm opacity-90">Respuesta promedio</div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-2xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Agende una visita técnica</h3>
                  <p className="text-white/80">Complete el formulario y nos pondremos en contacto</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Ingrese su nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  >
                    <option value="" className="bg-[var(--color-primary)]">Seleccione un servicio</option>
                    <option value="hvac" className="bg-[var(--color-primary)]">HVAC / Climatización</option>
                    <option value="industrial" className="bg-[var(--color-primary)]">Refrigeración Industrial</option>
                    <option value="precision" className="bg-[var(--color-primary)]">Refrigeración de Precisión</option>
                    <option value="ammonia" className="bg-[var(--color-primary)]">Amoníaco (NH₃)</option>
                    <option value="electricity" className="bg-[var(--color-primary)]">Electricidad Industrial</option>
                    <option value="maintenance" className="bg-[var(--color-primary)]">Mantenimiento General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Descripción del requerimiento *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Describa su necesidad técnica, equipos involucrados y cualquier detalle relevante..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    required
                    className="w-5 h-5 rounded bg-white/10 border-white/20 text-[var(--color-accent)] focus:ring-[var(--color-accent)] focus:ring-offset-[var(--color-primary)]"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-white/80">
                    Acepto la política de privacidad y autorizo el contacto
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Solicitar evaluación técnica
                </button>

                <p className="text-center text-white/60 text-sm">
                  Uno de nuestros especialistas se contactará dentro de las próximas 4 horas hábiles.
                </p>
              </form>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-gray-200">
  <div className="text-center mb-12">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Sectores Especializados</h3>
    <p className="text-gray-600 max-w-xl mx-auto">Brindamos servicios técnicos especializados para diferentes industrias</p>
  </div>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { title: "Hotelero", desc: "Hoteles y resorts", Icon: Building },
    { title: "Industrial", desc: "Plantas y fábricas", Icon: Factory },
    { title: "Comercial", desc: "Centros comerciales", Icon: ShoppingBag },
    { title: "Salud", desc: "Hospitales y clínicas", Icon: Heart },
  ].map(({ title, desc, Icon }) => (
    <div
      key={title}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Glow decorativo */}
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#0b1e63]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#0b1e63]/5 group-hover:bg-[#0b1e63]/10 transition-colors">
        <Icon className="h-7 w-7 text-[#0b1e63] group-hover:scale-110 transition-transform" />
      </div>

      <div className="font-semibold text-gray-900 text-lg mb-1">
        {title}
      </div>
      <p className="text-gray-600 text-sm">
        {desc}
      </p>

      {/* Línea inferior elegante */}
      <div className="mt-4 h-[2px] w-0 mx-auto bg-[#0b1e63] group-hover:w-12 transition-all duration-300 rounded-full" />
    </div>
  ))}
</div>

</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;