'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const FooterMinimal = () => {
  const serviceLinks = [
    { name: 'HVAC / Climatización', href: '/services/hvac' },
    { name: 'Refrigeración Industrial', href: '/services/industrial' },
    { name: 'Refrigeración de Precisión', href: '/services/precision' },
    { name: 'Amoníaco (NH₃)', href: '/services/ammonia' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0b1e63] text-white">
      <div className="container-custom py-12">
        {/* Logo Centrado en Mobile, Alineado a la izquierda en Desktop */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative w-60 h-28 md:w-72 md:h-32">
            <Image
              src="/logo-termoe2.png"
              alt="Logo de Thermolectrica"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Contenido Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Descripción - Ocupa toda la fila en mobile, columna 1 en desktop */}
          <div className="md:col-span-1 text-center md:text-left">
            <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Especialistas en sistemas térmicos, eléctricos y de climatización industrial.
            </p>
            
            {/* Redes Sociales - Solo visible en mobile aquí */}
            <div className="mt-6 md:hidden">
              <h4 className="font-semibold mb-4 text-white text-center">Síguenos</h4>
              <div className="flex justify-center gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 text-white">Servicios</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 text-white">Enlaces</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contacto y Redes Sociales */}
          <div className="space-y-6 md:col-span-1">
            {/* Contacto */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 text-white">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#4ade80]" />
                  <a href="tel:+5491112345678" className="text-white/80 hover:text-white text-sm">
                    +54 9 11 1234-5678
                  </a>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 text-[#4ade80]" />
                  <a href="mailto:info@thermolectrica.com" className="text-white/80 hover:text-white text-sm">
                    info@thermolectrica.com
                  </a>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-[#4ade80]" />
                  <span className="text-white/80 text-sm">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            {/* Redes Sociales - Solo visible en desktop */}
            <div className="hidden md:block space-y-4">
              <h4 className="font-semibold text-white">Redes Sociales</h4>
              
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
              
              <p className="text-white/60 text-xs">
                Compartimos contenido técnico, casos de éxito y novedades del sector.
              </p>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Thermolectrica. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Términos
              </Link>
              <Link href="/sitemap" className="text-white/60 hover:text-white transition-colors">
                Mapa del Sitio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;