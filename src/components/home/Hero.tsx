import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Settings,
  CheckCircle,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo global */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heross.png"
          alt="Técnico especialista Thermolectrica"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay cinematográfico */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

        {/* Glows desktop */}
        <div className="hidden lg:block absolute top-1/3 -left-1/4 w-175 h-175 bg-linear-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="hidden lg:block absolute bottom-1/4 -right-1/4 w-150 h-150 bg-linear-to-tl from-accent/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Contenedor armónico */}
        <div className="max-w-5xl space-y-10 text-white">
          
          {/* Badge */}
          <div
            className="mt-4
            inline-flex items-center gap-2 px-6 py-2.5 rounded-full
            bg-white/10 backdrop-blur
            text-white text-sm font-semibold
            border border-white/20
          "
          >
            <Shield className="w-4 h-4 text-accent" />
            Servicios Técnicos Industriales
          </div>

          {/* Headline Group */}
          <div className="space-y-6">
            <h1
              className="
              text-5xl sm:text-6xl lg:text-7xl xl:text-8xl
              font-bold
              leading-none
              tracking-tighter
            "
            >
              Hacemos que
              <span className="block bg-linear-to-r from-accent to-accent-dark bg-clip-text text-transparent italic">
                Funcione
              </span>
            </h1>

            {/* Subtítulo Diseñado */}
            <div className="border-l-4 border-accent pl-6 py-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-widest text-white italic">
                Sistemas térmicos y eléctricos industriales
              </h2>
            </div>

            {/* Línea Secundaria Diseñada */}
            <p
              className="
              text-lg sm:text-xl
              text-white/80
              max-w-2xl
              font-medium
              leading-relaxed
            "
            >
              <span className="text-white font-bold">Refrigeración, climatización y electricidad</span> integradas en una sola solución.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="https://wa.me/5491125098629?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20servicio%20t%C3%A9cnico%20industrial."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              Solicitar Servicio
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                bg-white/5 backdrop-blur border border-white/20 rounded-lg
                text-white font-bold uppercase text-sm tracking-widest
                hover:bg-white/15
                transition-all
              "
            >
              <Settings className="w-5 h-5" />
              Ver Servicios
            </Link>
          </div>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl pt-4 mb-8">
            <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <CheckCircle className="w-6 h-6 text-accent" />
              <div>
                <div className="font-bold text-lg leading-none">15+ años</div>
                <div className="text-xs text-white/60 uppercase tracking-tighter mt-1">Experiencia técnica</div>
              </div>
            </div>

            {/* Cambio realizado aquí: Opción A */}
            <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Zap className="w-6 h-6 text-accent" />
              <div>
                <div className="font-bold text-lg leading-none">Respuesta Rápida</div>
                <div className="text-xs text-white/60 uppercase tracking-tighter mt-1">Soporte Técnico</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <Shield className="w-6 h-6 text-accent" />
              <div>
                <div className="font-bold text-lg leading-none">Certificado</div>
                <div className="text-xs text-white/60 uppercase tracking-tighter mt-1">Garantía de Obra</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;