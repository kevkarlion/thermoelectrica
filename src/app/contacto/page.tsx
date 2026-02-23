"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  Building2,
  ShieldCheck,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

const ContactPage = () => {
  const contactData = {
    emergencyWhatsapp: "+541125098629",
    email: "servicios@thermolectrica.com",
    location: "Santa Fe, Argentina",
    socials: [
      { 
        name: "LinkedIn", 
        icon: Linkedin, 
        href: "https://www.linkedin.com/in/thermolectrica-hacemos-que-funcione-b9b0303b0",
        label: "Perfil Profesional"
      },
      { 
        name: "Instagram", 
        icon: Instagram, 
        href: "https://www.instagram.com/thermolectrica/",
        label: "@thermolectrica"
      },
      { 
        name: "Facebook", 
        icon: Facebook, 
        href: "https://www.facebook.com/profile.php?id=61552231003758",
        label: "Thermolectrica"
      },
    ]
  };

  // Estado para manejar el envío y errores
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    // Construimos el mensaje combinando empresa y especialidad para que lo recibas todo
    const datos = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      mensaje: `
        Empresa: ${formData.get("empresa")}
        Especialidad de interés: ${formData.get("especialidad")}
        Detalles técnicos: ${formData.get("mensaje")}
      `,
    };

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Sección */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-6xl mb-4 uppercase italic tracking-tighter font-black">
            Central de <span className="text-accent">Consultas</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Soporte técnico y asesoramiento en ingeniería termoeléctrica
          </p>
        </div>
      </section>

      {/* Cuerpo de la página */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Columna de Información */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-gray-900 mb-6">
                  Datos de <span className="text-primary">Contacto</span>
                </h2>
                <p className="text-gray-600 mb-8 font-medium">
                  Nuestro departamento técnico está disponible para evaluar su
                  proyecto o necesidad de mantenimiento especializado.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${contactData.emergencyWhatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 transition-colors shadow-sm group"
                >
                  <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Línea Directa</p>
                    <p className="text-gray-900 font-bold text-sm">WhatsApp Comercial</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 transition-colors shadow-sm group"
                >
                  <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Email Técnico</p>
                    <p className="text-gray-900 font-bold text-sm">{contactData.email}</p>
                  </div>
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                  Canales Digitales
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {contactData.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-all group shadow-sm"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <social.icon size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-black uppercase tracking-tight text-gray-900">{social.name}</span>
                        <span className="text-[10px] text-gray-500 font-medium">{social.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-primary rounded-3xl text-white relative overflow-hidden shadow-xl">
                <Clock className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 rotate-12" />
                <h3 className="text-lg font-black uppercase italic mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-accent" size={20} /> Disponibilidad
                </h3>
                <div className="space-y-2 text-sm font-medium text-white/70">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Lunes a Viernes</span>
                    <span className="text-white">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Guardia Técnica</span>
                    <span className="text-accent font-black underline italic">
                      Bajo Requerimiento
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Formulario */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter text-gray-900 mb-2">
                    Iniciar <span className="text-primary">Requerimiento</span>
                  </h3>
                  <p className="text-gray-500 mb-10 font-medium">
                    Complete los datos y un ingeniero especialista se pondrá en
                    contacto.
                  </p>

                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Nombre Completo</label>
                      <input
                        name="nombre"
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-900 font-bold"
                        placeholder="Ej: Ing. Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Empresa</label>
                      <input
                        name="empresa"
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-900 font-bold"
                        placeholder="Nombre de la compañía"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Correo</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-900 font-bold"
                        placeholder="email@empresa.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Especialidad</label>
                      <select name="especialidad" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-all text-gray-900 font-bold appearance-none">
                        <option>HVAC / Climatización</option>
                        <option>Refrigeración Industrial</option>
                        <option>Ingeniería Eléctrica</option>
                        <option>Mantenimiento Predictivo</option>
                        <option>Amoníaco (NH3)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Especificaciones Técnicas</label>
                      <textarea
                        name="mensaje"
                        rows={4}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-all text-gray-900 font-bold resize-none"
                        placeholder="Describa los detalles técnicos de su consulta..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <button
                        type="submit"
                        disabled={status === "sending" || status === "success"}
                        className={`
                          w-full py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all
                          ${status === "success" ? "bg-emerald-500 text-white" : 
                            status === "error" ? "bg-red-600 text-white" : "bg-primary hover:bg-gray-900 text-white shadow-lg"}
                        `}
                      >
                        {status === "sending" ? "Procesando..." : status === "success" ? (
                          <>Mensaje Enviado <ShieldCheck size={20} /></>
                        ) : status === "error" ? (
                          "Error al enviar, reintentar"
                        ) : (
                          <>Enviar Requerimiento <Send size={18} /></>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-gray-950 py-12">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-left">
            <Building2 className="text-accent w-10 h-10" />
            <div className="text-white">
              <p className="font-black uppercase italic tracking-tighter">Relevamientos en Planta</p>
              <p className="text-white/50 text-sm font-medium uppercase tracking-tight">Coordinación de visitas técnicas de diagnóstico.</p>
            </div>
          </div>
          <Link
            href={`https://wa.me/${contactData.emergencyWhatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-[0.15em] hover:scale-105 transition-transform"
          >
            <MessageSquare size={18} /> Contacto WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;