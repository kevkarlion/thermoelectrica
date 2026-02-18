"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

const FooterMinimal = () => {
  const serviceLinks = [
    { name: "HVAC / Climatización", href: "/services/hvac" },
    { name: "Refrigeración Industrial", href: "/services/industrial" },
    { name: "Data Centers / Salas Técnicas", href: "/services/precision" },
    { name: "Amoníaco (NH₃)", href: "/services/ammonia" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/services" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  const contactData = {
    emergencyWhatsapp: "+541125098629",
    email: "servicios@thermolectrica.com",
    location: "Buenos Aires, Argentina",
  };

  return (
    <footer className="bg-primary-footer text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Logo & Emergency Line */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="relative w-64 h-28">
            <Image
              src="/logo-termoe2.png"
              alt="Logo de Thermolectrica"
              fill
              className="object-contain filter brightness-110"
              priority
            />
          </div>

          {/* Emergency Highlight Box */}
          <div className="group bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex items-center gap-4 max-w-sm transition-all hover:bg-red-500/10">
            <div className="bg-red-500 rounded-full p-2 animate-pulse">
              <AlertCircle size={24} className="text-white" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-red-400 font-bold mb-1">
                Línea exclusiva clientes activos
              </p>

              <a
                href={`https://wa.me/${contactData.emergencyWhatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:opacity-70 transition"
                title="Soporte por WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-y border-white/5 py-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-accent">
              Infraestructura
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Especialistas en sistemas térmicos, eléctricos y de climatización
              industrial de alta exigencia. Enfoque en continuidad operativa y
              eficiencia técnica.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-6">
              Áreas Técnicas
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white hover:translate-x-1 transition-all text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-6">
              Navegación
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white hover:translate-x-1 transition-all text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-6">
              Contacto Comercial
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={14} className="text-accent" />
                </div>
                <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                  {contactData.email}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span className="text-sm text-white/50">
                  {contactData.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-white/30 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Thermolectrica — Ingeniería en
            Climatización Industrial
          </p>

          <div className="flex gap-8">
            {["Privacidad", "Términos", "Sitemap"].map((legal) => (
              <Link
                key={legal}
                href={`/${legal.toLowerCase()}`}
                className="text-[11px] uppercase tracking-widest text-white/30 hover:text-accent transition-colors"
              >
                {legal}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;
