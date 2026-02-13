"use client";

import {
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  ShoppingBag,
  Heart,
  Factory,
  Building,
} from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Diagnóstico técnico gratuito",
    "Respuesta en menos de 24 horas",
    "Personal técnico certificado",
    "Garantía en todos los servicios",
    "Soporte 24/7 para emergencias",
    "Presupuesto sin compromiso",
  ];

  return (
    <section className="section-padding bg-linear-to-b from-white to-gray-50">
      {/* Cambio 1: Quitamos container-custom y max-w-6xl del formulario */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
              bg-accent/10 
              text-accent 
              text-sm font-semibold 
              tracking-wide
              mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Listo para comenzar
          </span>

          <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">
            Solicite su evaluación técnica
          </h2>

          <p className="text-text-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de especialistas está listo para atender sus
            necesidades en sistemas térmicos, eléctricos y de climatización.
            Garantizamos soluciones confiables y eficientes.
          </p>
        </div>

        {/* Cambio 2: División principal con diferentes comportamientos */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Benefits and Contact Options */}
          <div className="space-y-8 mb-12 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200/70">
              <h3 className="text-2xl font-bold mb-6">
                ¿Por qué elegir Thermolectrica?
              </h3>

              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icono sobrio */}
                    <div
                      className="
                        w-9 h-9 rounded-lg flex items-center justify-center shrink-0
                        bg-gray-100 border border-gray-200
                      "
                    >
                      <CheckCircle className="w-5 h-5 text-gray-700" />
                    </div>

                    <span className="text-text leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200/70">
                <h4 className="font-semibold mb-4 text-gray-900">
                  Métodos de contacto
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+5491112345678"
                    className="
                      flex items-center justify-center gap-2
                      bg-primary
                      hover:bg-primary-dark
                      text-white font-semibold
                      py-3 px-4 rounded-lg
                      transition-all duration-300
                      shadow-md hover:shadow-lg
                    "
                  >
                    <Phone className="w-5 h-5" />
                    <span>Llamar ahora</span>
                  </a>

                  <a
                    href="mailto:info@thermolectrica.com"
                    className="
                      flex items-center justify-center gap-2
                      bg-white
                      border-2 border-gray-300
                      text-gray-800
                      hover:border-primary
                      hover:text-primary
                      font-semibold
                      py-3 px-4 rounded-lg
                      transition-all duration-300
                    "
                  >
                    <Mail className="w-5 h-5" />
                    <span>Enviar email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats premium */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="
                  bg-white rounded-xl p-6 text-center
                  border border-gray-200 shadow-sm
                "
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  99%
                </div>
                <div className="text-sm text-gray-500">Tiempo operativo</div>
              </div>

              <div
                className="
                  bg-white rounded-xl p-6 text-center
                  border border-gray-200 shadow-sm
                "
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  4h
                </div>
                <div className="text-sm text-gray-500">
                  Respuesta promedio
                </div>
              </div>
            </div>
          </div>

          {/* Cambio 3: Right Column - Formulario sin limitaciones en móvil */}
          <div className="lg:relative">
            {/* En móvil: ocupa todo el ancho de la pantalla */}
            <div className="
              w-screen 
              -mx-4 
              sm:-mx-6 
              bg-linear-to-br from-gray-900 to-gray-800 
              rounded-none 
              sm:rounded-2xl 
              shadow-2xl 
              p-6 
              md:p-10 
              border-0 
              sm:border 
              border-gray-700/60 
              text-white
              lg:w-auto
              lg:mx-0
              lg:rounded-2xl
            ">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Agende una visita técnica
                  </h3>
                  <p className="text-white/70">
                    Complete el formulario y nos pondremos en contacto
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="
                        w-full px-4 py-3
                        bg-white/10 border border-white/20
                        rounded-lg text-white
                        placeholder-white/40
                        focus:outline-none focus:ring-2
                        focus:ring-white/40 focus:border-white/40
                      "
                      placeholder="Ingrese su nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="
                        w-full px-4 py-3
                        bg-white/10 border border-white/20
                        rounded-lg text-white
                        placeholder-white/40
                        focus:outline-none focus:ring-2
                        focus:ring-white/40 focus:border-white/40
                      "
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="
                        w-full px-4 py-3
                        bg-white/10 border border-white/20
                        rounded-lg text-white
                        placeholder-white/40
                        focus:outline-none focus:ring-2
                        focus:ring-white/40 focus:border-white/40
                      "
                      placeholder="correo@empresa.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      className="
                        w-full px-4 py-3
                        bg-white/10 border border-white/20
                        rounded-lg text-white
                        placeholder-white/40
                        focus:outline-none focus:ring-2
                        focus:ring-white/40 focus:border-white/40
                      "
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    required
                    className="
                      w-full px-4 py-3
                      bg-white/10 border border-white/20
                      rounded-lg text-white
                      focus:outline-none focus:ring-2
                      focus:ring-white/40 focus:border-white/40
                    "
                  >
                    <option value="" className="bg-gray-800">
                      Seleccione un servicio
                    </option>
                    <option value="hvac" className="bg-gray-800">
                      HVAC / Climatización
                    </option>
                    <option value="industrial" className="bg-gray-800">
                      Refrigeración Industrial
                    </option>
                    <option value="precision" className="bg-gray-800">
                      Refrigeración de Precisión
                    </option>
                    <option value="ammonia" className="bg-gray-800">
                      Amoníaco (NH₃)
                    </option>
                    <option value="electricity" className="bg-gray-800">
                      Electricidad Industrial
                    </option>
                    <option value="maintenance" className="bg-gray-800">
                      Mantenimiento General
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Descripción del requerimiento *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="
                      w-full px-4 py-3
                      bg-white/10 border border-white/20
                      rounded-lg text-white
                      placeholder-white/40
                      focus:outline-none focus:ring-2
                      focus:ring-white/40 focus:border-white/40
                    "
                    placeholder="Describa su necesidad técnica..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    required
                    className="w-5 h-5 rounded border-white/30 bg-white/10 text-white focus:ring-white/40"
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="text-sm text-white/70"
                  >
                    Acepto la política de privacidad y autorizo el contacto
                  </label>
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    bg-white text-gray-900
                    font-semibold
                    py-4 px-6 rounded-lg
                    transition-all duration-300
                    hover:bg-gray-200
                    hover:shadow-xl
                    active:scale-[0.98]
                  "
                >
                  Solicitar evaluación técnica
                </button>

                <p className="text-center text-white/50 text-sm">
                  Uno de nuestros especialistas se contactará dentro de las
                  próximas 4 horas hábiles.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Badges - Mantiene el diseño original */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-16">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                bg-accent/10 
                text-accent 
                text-sm font-semibold 
                tracking-wide
                mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              Sectores
            </span>

            <h3 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Sectores Especializados
            </h3>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Brindamos servicios técnicos especializados para diferentes
              industrias
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Hotelero",
                desc: "Hoteles y resorts",
                Icon: Building,
              },
              {
                title: "Industrial",
                desc: "Plantas y fábricas",
                Icon: Factory,
              },
              {
                title: "Comercial",
                desc: "Centros comerciales",
                Icon: ShoppingBag,
              },
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
                <p className="text-gray-600 text-sm">{desc}</p>

                {/* Línea inferior elegante */}
                <div className="mt-4 h-0.5 w-0 mx-auto bg-[#0b1e63] group-hover:w-12 transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;