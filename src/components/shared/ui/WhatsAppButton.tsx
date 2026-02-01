'use client';

import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppButtonNoEffects = () => {
  // No usamos useState inicial que dependa de efectos
  // En lugar de eso, manejamos todo con handlers directos

  const handleWhatsAppClick = () => {
    const phoneNumber = '+5491112345678';
    const message = `¡Hola Thermolectrica! 👋 

Me contacto desde su sitio web y estoy interesado en sus servicios técnicos industriales.

📋 Servicio de interés: 
🏢 Empresa: 
📍 Ubicación: 
📝 Descripción del requerimiento:

¿Podrían contactarme para coordinar una evaluación técnica?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmergencyClick = () => {
    const phoneNumber = '+5491112345678';
    const message = '🚨 *EMERGENCIA TÉCNICA* 🚨\n\nNecesito asistencia técnica de URGENCIA. Por favor, contáctenme inmediatamente.';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Emergency Button (small, top) */}
      <button
        onClick={handleEmergencyClick}
        className="fixed top-24 right-6 z-50 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
        aria-label="Emergencia técnica por WhatsApp"
      >
        <Phone size={20} />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <span className="text-red-500 text-xs font-bold">!</span>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-14 bg-white text-red-600 text-xs font-semibold py-1 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Emergencia 24/7
          <div className="absolute top-1/2 right-[-4px] transform -translate-y-1/2 border-4 border-transparent border-l-white" />
        </div>
      </button>

      {/* Main WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
        
        {/* Tooltip */}
        <div className="absolute right-16 bg-white text-[var(--color-text)] text-sm font-semibold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          ¡Chatee con nosotros!
          <div className="absolute top-1/2 right-[-4px] transform -translate-y-1/2 border-8 border-transparent border-l-white" />
        </div>
      </button>
    </>
  );
};

export default WhatsAppButtonNoEffects;