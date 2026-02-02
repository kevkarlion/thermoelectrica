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

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'HVAC', href: '/services/hvac' },
    { label: 'Refrigeración Industrial', href: '/services/industrial' },
    { label: 'Refrigeración de Precisión', href: '/services/precision' },
    { label: 'Amoníaco (NH₃)', href: '/services/ammonia' },
    { label: 'Contacto', href: '/contact' },
  ];

  // Función para cerrar el dropdown con retraso
  const closeDropdownWithDelay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 300ms = 0.3 segundos
  };

  // Función para cancelar el cierre si el cursor vuelve
  const cancelCloseDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Cerrar dropdown si se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const dropdownItems = navItems.slice(4, -1); // Items para el dropdown

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-64 h-14">
              <Image
                src="/logo-termoe.png"
                alt="Thermolectrica - Servicios Técnicos Industriales"
                fill
                priority
                sizes="(max-width: 768px) 160px, 192px"
                className="object-contain object-left"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left center',
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] font-medium transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dropdown Mejorado */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={buttonRef}
                className="flex items-center gap-1 text-[var(--color-text)] hover:text-[var(--color-accent)] font-medium transition-colors py-2"
                onMouseEnter={() => {
                  cancelCloseDropdown();
                  setIsDropdownOpen(true);
                }}
                onMouseLeave={closeDropdownWithDelay}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Más Servicios
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg w-56 transition-all duration-200 origin-top ${
                  isDropdownOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={cancelCloseDropdown}
                onMouseLeave={closeDropdownWithDelay}
              >
                <div className="py-2">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                {/* Flecha del dropdown */}
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200" />
              </div>
            </div>
            
            <Link
              href="/contact"
              className="btn-primary ml-4 hover:bg-orange-600 "
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-colors rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;