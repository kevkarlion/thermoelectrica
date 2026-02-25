'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Instagram, Linkedin, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'HVAC', href: '/servicios/hvac-climatizacion-industrial' },
    { label: 'Frío Industrial', href: '/servicios/refrigeracion-industrial' },
    { label: 'Data Centers', href: '/servicios/refrigeracion-precision-data-centers' },
    { label: 'Amoníaco (NH₃)', href: '/servicios/sistemas-refrigeracion-amoniaco-nh3' },
    { label: 'Electricidad Industrial', href: '/servicios/electricidad-industrial' },
    { label: 'Mantenimiento Preventivo y Predictivo', href: '/servicios/mantenimiento-preventivo-predictivo' },
    { label: 'Contacto', href: '/contacto' },
  ];

  const mainNav = [navItems[0], navItems[1]]; // Inicio y Servicios
  const servicesDropdown = navItems.slice(2, -1); // Todos los servicios específicos
  const contactItem = navItems[navItems.length - 1]; // Contacto

  const closeDropdownWithDelay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  const cancelCloseDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white lg:bg-white/80 lg:backdrop-blur-md">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-18">
              <Image
                src="/logo-nav.png"
                alt="Thermolectrica"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-gray-900 font-bold uppercase text-[11px] tracking-widest hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown de Servicios (hover) */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => { cancelCloseDropdown(); setIsDropdownOpen(true); }}
              onMouseLeave={closeDropdownWithDelay}
            >
              <button
                ref={buttonRef}
                className="flex items-center gap-1 text-gray-900 font-bold uppercase text-[11px] tracking-widest hover:text-accent transition-colors"
              >
                Especialidades
                <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`
                  absolute left-0 top-full mt-4 w-72 rounded-xl
                  bg-white shadow-2xl border border-gray-100
                  transition-all duration-200 origin-top
                  ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
              >
                <div className="py-2">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 text-[10px] font-black uppercase tracking-tight text-gray-600 hover:bg-gray-50 hover:text-accent transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href={contactItem.href} className="btn-primary py-3! px-6! text-[11px]!">
              {contactItem.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-full w-[80%] max-w-sm z-50 bg-white p-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-black uppercase italic tracking-tighter text-primary">Menú</span>
          <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full"><X size={20} /></button>
        </div>

        <div className="flex flex-col gap-4">
          {/* Inicio */}
          <Link
            href="/"
            className="text-lg font-display font-black uppercase tracking-tighter text-gray-900 border-b border-gray-50 pb-2 hover:text-accent hover-lift transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>

          {/* Servicios principal clickeable */}
          <Link
            href="/servicios"
            className="text-lg font-display font-black uppercase tracking-tighter text-gray-900 border-b border-gray-50 pb-2 hover:text-accent hover-lift transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>

          {/* Lista de servicios específicos */}
          <div className="flex flex-col gap-2 pl-4">
            {servicesDropdown.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-display font-semibold uppercase tracking-tight text-gray-700 py-1 hover:text-accent hover-lift transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <Link
            href="/contacto"
            className="text-lg font-display font-black uppercase tracking-tighter text-gray-900 border-b border-gray-50 pb-2 hover:text-accent hover-lift transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-6">
            <Link href="https://www.instagram.com/thermolectrica/" target="_blank" className="text-gray-700 hover:text-accent transition-colors"><Instagram size={20} /></Link>
            <Link href="https://www.facebook.com/profile.php?id=61552231003758" target="_blank" className="text-gray-700 hover:text-accent transition-colors"><Facebook size={20} /></Link>
            <Link href="https://www.linkedin.com/in/thermolectrica-hacemos-que-funcione-b9b0303b0" target="_blank" className="text-gray-700 hover:text-accent transition-colors"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;