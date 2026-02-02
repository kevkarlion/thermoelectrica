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

  // Cerrar mobile si pasamos a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'HVAC', href: '/services/hvac' },
    { label: 'Refrigeración Industrial', href: '/services/industrial' },
    { label: 'Refrigeración de Precisión', href: '/services/precision' },
    { label: 'Amoníaco (NH₃)', href: '/services/ammonia' },
    { label: 'Contacto', href: '/contact' },
  ];

  const dropdownItems = navItems.slice(4, -1);

  const closeDropdownWithDelay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const cancelCloseDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Click fuera del dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className="
        sticky top-0 z-50 border-b border-gray-200/60
        bg-white lg:bg-white/80
        lg:backdrop-blur-md
      "
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-56 h-22">
              <Image
                src="/logo-nav.png"
                alt="Thermolectrica"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative text-[var(--color-text)] font-medium
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[var(--color-accent)]
                  hover:after:w-full after:transition-all
                "
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={buttonRef}
                className="flex items-center gap-1 text-[var(--color-text)] font-medium"
                onMouseEnter={() => {
                  cancelCloseDropdown();
                  setIsDropdownOpen(true);
                }}
                onMouseLeave={closeDropdownWithDelay}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Más Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`
                  absolute left-0 top-full mt-4 w-64 rounded-2xl
                  bg-white/90 backdrop-blur-md shadow-xl
                  border border-gray-200/60
                  transition-all duration-200 origin-top
                  ${
                    isDropdownOpen
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }
                `}
                onMouseEnter={cancelCloseDropdown}
                onMouseLeave={closeDropdownWithDelay}
              >
                <div className="py-3">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn-primary">
              Contacto
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`
          lg:hidden fixed inset-0 z-50 bg-black/40 transition-opacity
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`
          lg:hidden fixed right-0 top-0 h-full w-[85%] max-w-sm z-50
          bg-white shadow-xl p-6
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-semibold text-lg">Menú</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-lg font-medium text-gray-800"
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
