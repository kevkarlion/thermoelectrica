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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo y Descripción */}
          <div className="space-y-4 md:col-span-1">
            {/* Aquí va tu logo - reemplaza la src con la ruta de tu logo */}
            <div className="relative w-72 h-32">
              <Image
                src="/logo-termoe2.png" // Cambia esta ruta por la de tu logo
                alt="Logo de Thermolectrica"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed">
              Especialistas en sistemas térmicos, eléctricos y de climatización industrial.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1">
            <div>
              <h4 className="font-semibold mb-3 text-white">Servicios</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">Enlaces</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contacto</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--color-accent)]" />
                <a href="tel:+5491112345678" className="text-white/80 hover:text-white text-sm">
                  +54 9 11 1234-5678
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-accent)]" />
                <a href="mailto:info@thermolectrica.com" className="text-white/80 hover:text-white text-sm">
                  info@thermolectrica.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-white/80 text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Redes Sociales - Nueva Columna */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Redes Sociales</h4>
            
            <div className="space-y-4">
              <p className="text-white/80 text-sm">
                Síguenos en nuestras redes para estar al día con nuestras últimas noticias y proyectos.
              </p>
              
              <div className="flex gap-4 pt-2">
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
              
              <div className="pt-2">
                <p className="text-white/60 text-xs">
                  Compartimos contenido técnico, casos de éxito y novedades del sector.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Thermolectrica. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white">
                Privacidad
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;