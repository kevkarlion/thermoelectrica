'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

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

  // 1. ACTUALIZACIÓN DE SLUGS PARA SEO
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    // Estos slugs deben ser IDENTICOS a los del archivo [slug]/page.tsx
    { label: 'HVAC', href: '/servicios/hvac-climatizacion-industrial' },
    { label: 'Frío Industrial', href: '/servicios/refrigeracion-industrial' },
    { label: 'Data Centers', href: '/servicios/refrigeracion-precision-data-centers' },
    { label: 'Amoníaco (NH₃)', href: '/servicios/sistemas-refrigeracion-amoniaco-nh3' },
    { label: 'Ingeniería Eléctrica', href: '/servicios/ingenieria-electrica-industrial' },
    { label: 'Mantenimiento', href: '/servicios/mantenimiento-predictivo-analisis' },
    { label: 'Contacto', href: '/contacto' },
  ];

  // Separamos los items para la navegación principal y el dropdown
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

            {/* Dropdown de Servicios */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={buttonRef}
                className="flex items-center gap-1 text-gray-900 font-bold uppercase text-[11px] tracking-widest hover:text-accent transition-colors"
                onMouseEnter={() => { cancelCloseDropdown(); setIsDropdownOpen(true); }}
                onMouseLeave={closeDropdownWithDelay}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                onMouseEnter={cancelCloseDropdown}
                onMouseLeave={closeDropdownWithDelay}
              >
                <div className="py-2">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 text-[10px] font-black uppercase tracking-tight text-gray-600 hover:bg-gray-50 hover:text-accent transition-all"
                      onClick={() => setIsDropdownOpen(false)}
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
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      
      <div className={`lg:hidden fixed right-0 top-0 h-full w-[80%] max-w-sm z-50 bg-white p-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-10">
          <span className="font-black uppercase italic tracking-tighter text-primary">Menú</span>
          <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full"><X size={20} /></button>
        </div>

        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-black uppercase italic tracking-tighter text-gray-900 border-b border-gray-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;