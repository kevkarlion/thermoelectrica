'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar suscripción a newsletter
    console.log('Newsletter subscription:', email);
    alert('¡Gracias por suscribirse a nuestro boletín técnico!');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLinks = [
    { name: 'HVAC / Climatización', href: '/services/hvac' },
    { name: 'Refrigeración Industrial', href: '/services/industrial' },
    { name: 'Refrigeración de Precisión', href: '/services/precision' },
    { name: 'Amoníaco (NH₃)', href: '/services/ammonia' },
    { name: 'Electricidad Industrial', href: '/services#electricity' },
    { name: 'Mantenimiento Preventivo', href: '/services#maintenance' },
  ];

  const companyLinks = [
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Nuestro Equipo', href: '/team' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Certificaciones', href: '/certifications' },
    { name: 'Blog Técnico', href: '/blog' },
    { name: 'Trabajá con Nosotros', href: '/careers' },
  ];

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Política de Calidad', href: '/quality-policy' },
    { name: 'Protocolo de Seguridad', href: '/safety' },
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-primary)] font-bold text-2xl">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Thermolectrica</h3>
                <p className="text-sm opacity-90">Servicios Técnicos Industriales</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Especialistas en sistemas térmicos, eléctricos y de climatización. 
              Garantizamos el funcionamiento confiable, eficiente y seguro de cada sistema.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contacto</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <a 
                    href="tel:+5491112345678" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +54 9 11 1234-5678
                  </a>
                  <p className="text-sm text-white/60">Emergencias 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:info@thermolectrica.com" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    info@thermolectrica.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-white/80">Av. Industrial 1234</p>
                  <p className="text-white/80">Buenos Aires, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="font-medium">Horarios</p>
                  <p className="text-white/80">Lun-Vie: 8:00 - 18:00</p>
                  <p className="text-white/80">Sáb: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Servicios</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Boletín Técnico</h3>
            <p className="text-white/80">
              Suscríbase para recibir consejos técnicos, novedades del sector y ofertas especiales.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@empresa.com"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Suscribirse
              </button>
            </form>
            
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {new Date().getFullYear()} Thermolectrica. Todos los derechos reservados.
              </p>
              <p className="text-white/60 text-xs mt-2">
                R.N.E.S. 12345678 | CUIT 30-12345678-9
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
              aria-label="Volver arriba"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/sitemap.xml" 
              className="text-white/60 hover:text-white transition-colors"
            >
              Mapa del Sitio
            </a>
          </div>
          
          {/* Certifications */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white/5 px-4 py-2 rounded-lg">
              <span className="text-xs font-medium">ISO 9001:2015 Certificado</span>
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-lg">
              <span className="text-xs font-medium">Personal Certificado</span>
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-lg">
              <span className="text-xs font-medium">Seguridad Industrial</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;