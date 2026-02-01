import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[80dvh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 gradient-overlay" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("/images/hero-background.jpg")',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-full">
              Servicios Técnicos Industriales
            </span>
          </div>
          
          <h1 className="text-white mb-6 animate-fade-in">
            Hacemos que funcione
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Especialistas en sistemas térmicos, eléctricos y de climatización. 
            Mantenimiento, instalación y diagnóstico para el sector hotelero, 
            industrial y comercial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="btn-primary text-center px-8 py-4 text-lg"
            >
              Solicitar Servicio
            </Link>
            <Link 
              href="/services" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 
                         px-8 py-4 rounded-lg text-center transition-all duration-300"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Proyectos completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Soporte técnico</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;