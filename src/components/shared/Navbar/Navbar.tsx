'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'HVAC', href: '/services/hvac' },
    { label: 'Refrigeración Industrial', href: '/services/industrial' },
    { label: 'Refrigeración de Precisión', href: '/services/precision' },
    { label: 'Amoníaco (NH₃)', href: '/services/ammonia' },
    { label: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Thermolectrica</h1>
              <p className="text-xs text-[var(--color-text-light)]">Servicios Técnicos Industriales</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-text hover:text-accent font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dropdown */}
            <div className="relative group">
              <button className="text-text hover:text-accent font-medium transition-colors">
                Más Servicios
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48">
                {navItems.slice(4, -1).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-text hover:bg-primary hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/contact"
              className="btn-primary"
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
                  className="block px-4 py-2 text-text hover:bg-primary hover:text-white transition-colors"
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