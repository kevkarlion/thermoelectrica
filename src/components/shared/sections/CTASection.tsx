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
  Server,
  Activity,
  MessageCircle, // Icono para WhatsApp
} from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Diagnóstico profesional",
    "Respuesta ágil según criticidad del servicio",
    "Personal técnico calificado",
    "Garantía en trabajos realizados",
    "Atención de emergencias bajo acuerdo previo",
    "Presupuesto claro y sin compromiso",
  ];

  const sectors = [
    { title: "Industrial", desc: "Plantas y procesos productivos", Icon: Factory },
    { title: "Data Centers", desc: "Salas técnicas y servidores", Icon: Server },
    { title: "Salud", desc: "Áreas críticas y hospitales", Icon: Heart },
    { title: "Hotelero", desc: "Sistemas centrales y confort", Icon: Building },
    { title: "Comercial", desc: "Grandes superficies y oficinas", Icon: ShoppingBag },
  ];

  // Datos de contacto configurables
  const contactInfo = {
    phone: "+5491112345678", // Reemplaza con tu número real (formato internacional sin espacios)
    whatsappMsg: "Hola Thermolectrica, me contacto desde la web para solicitar una evaluación técnica.",
    email: "info@thermolectrica.com"
  };

  return (
    <section className="section-padding pt-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Contacto Directo
          </span>

          <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">
            Solicite su evaluación técnica
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Especialistas listos para atender sus requerimientos en sistemas térmicos, 
            eléctricos y de climatización con enfoque en la continuidad operativa.
          </p>
        </div>

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
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-gray-100 border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="text-gray-700 leading-relaxed font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200/70">
                <h4 className="font-semibold mb-4 text-gray-900">
                  Canales de atención inmediata
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp Botón - Actualizado */}
                  <a
                    href={`https://wa.me/${contactInfo.phone.replace('+', '')}?text=${encodeURIComponent(contactInfo.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                  
                  {/* Email Botón - Clickeable */}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-800 hover:border-accent hover:text-accent font-semibold py-3 px-4 rounded-lg transition-all hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Enviar email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="inline-flex mb-2"><Activity className="w-6 h-6 text-accent" /></div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-tighter">
                  Continuidad Operativa
                </div>
                <div className="text-xs text-gray-500 mt-1 italic">Enfoque principal</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm flex flex-col justify-center">
                <div className="text-xl font-bold text-gray-900 leading-tight">
                  Respuesta según criticidad
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase font-semibold">Tiempos de respuesta</div>
              </div>
            </div>
          </div>

          {/* Right Column: Formulario */}
          <div className="lg:relative">
            <div className="w-full bg-linear-to-br from-gray-950 to-gray-900 rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-800 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase italic">
                    Agende una visita técnica
                  </h3>
                  <p className="text-white/60 text-sm">
                    Complete los datos para la asignación de un especialista.
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-1 focus:ring-accent outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Empresa"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email corporativo"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-1 focus:ring-accent outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Teléfono de contacto"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-1 focus:ring-accent outline-none"
                  />
                </div>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-accent outline-none appearance-none"
                >
                  <option value="" className="bg-gray-900 text-white">Seleccione servicio de interés</option>
                  <option value="hvac" className="bg-gray-900">HVAC / Climatización</option>
                  <option value="industrial" className="bg-gray-900">Refrigeración Industrial</option>
                  <option value="precision" className="bg-gray-900">Data Centers / Salas Técnicas</option>
                  <option value="ammonia" className="bg-gray-900">Amoníaco (NH₃)</option>
                  <option value="diagnostico" className="bg-gray-900">Diagnóstico Técnico en Sitio</option>
                </select>
                <textarea
                  rows={4}
                  required
                  placeholder="Describa su necesidad técnica o criticidad del equipo..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:ring-1 focus:ring-accent outline-none"
                />
                
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-black font-black uppercase tracking-widest py-4 rounded-lg transition-all active:scale-[0.98] shadow-lg"
                >
                  Solicitar evaluación técnica
                </button>

                <p className="text-center text-white/50 text-xs italic">
                  Un especialista se pondrá en contacto a la brevedad.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Áreas de Experiencia Técnica */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold tracking-wide mb-6">
              Expertise
            </span>
            <h3 className="mb-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900 uppercase italic">
              Áreas de experiencia técnica
            </h3>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Soporte especializado para infraestructuras críticas y entornos de alta exigencia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sectors.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-accent/10 transition-colors">
                  <Icon className="h-6 w-6 text-gray-900 group-hover:text-accent transition-colors" />
                </div>
                <div className="font-bold text-gray-900 text-md mb-1 uppercase tracking-tighter">
                  {title}
                </div>
                <p className="text-gray-500 text-[11px] leading-tight">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;