"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const FooterMinimal = () => {
  const serviceLinks = [
    { name: "HVAC / Climatización", href: "/servicios/hvac-climatizacion-industrial" },
    { name: "Refrigeración Industrial", href: "/servicios/refrigeracion-industrial" },
    { name: "Data Centers / Salas Técnicas", href: "/servicios/refrigeracion-precision-data-centers" },
    { name: "Amoníaco (NH₃)", href: "/servicios/sistemas-refrigeracion-amoniaco-nh3" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  const contactData = {
    whatsapp: "+541125098629",
    email: "servicios@thermolectrica.com",
    location: "Santa Fe, Argentina",
  };

  return (
    <footer className="bg-primary-footer text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio - Centrado en mobile, izquierda en desktop */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="relative w-56 h-20 mx-auto lg:mx-0">
              <Image
                src="/logo-termoe2.png"
                alt="Logo de Thermolectrica"
                fill
                className="object-contain filter brightness-110"
                priority
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Especialistas en sistemas térmicos, eléctricos y de climatización
              industrial de alta exigencia. Enfoque en continuidad operativa y
              eficiencia técnica.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/thermolectrica-hacemos-que-funcione-b9b0303b0", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/thermolectrica/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61552231003758", label: "Facebook" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Areas Técnicas */}
          <div className="lg:col-span-3 lg:ml-auto text-center lg:text-left">
            <h4 className="text-[11px] font-black uppercase tracking-[3px] text-accent mb-8">
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

          {/* Column 3: Navegación */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="text-[11px] font-black uppercase tracking-[3px] text-accent mb-8">
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

          {/* Column 4: Contacto */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-[11px] font-black uppercase tracking-[3px] text-accent mb-8">
              Contacto Directo
            </h4>
            <div className="space-y-5 flex flex-col items-center lg:items-start">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 group"
                target="_blank"
                rel="noopener noreferrer"
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
              <a
                href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 text-sm font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                WhatsApp Consultas
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-[2px] font-medium text-center md:text-left">
            © {new Date().getFullYear()} Thermolectrica — Ingeniería en
            Climatización Industrial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;