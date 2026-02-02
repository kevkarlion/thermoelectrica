import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Settings,
  CheckCircle,
  Sparkles,
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/15" />

        {/* Glows desktop */}
        <div className="hidden lg:block absolute top-1/3 -left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="hidden lg:block absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[var(--color-accent)]/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        {/* Contenedor armónico */}
        <div className="max-w-5xl space-y-10 text-white">

          {/* Badge */}
          <div className="mt-4
            inline-flex items-center gap-2 px-6 py-2.5 rounded-full
            bg-white/10 backdrop-blur
            text-white text-sm font-semibold
            border border-white/20
          ">
            <Shield className="w-4 h-4" />
            Servicios Técnicos Industriales
          </div>

          {/* Headline */}
          <div>
            <h1 className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-bold
              mb-5
              leading-[1.05]
              tracking-tight
            ">
              Hacemos que
              <span className="block bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] bg-clip-text text-transparent">
                Funcione
              </span>
            </h1>

            <p className="
              text-lg sm:text-xl lg:text-2xl
              text-white/90
              max-w-3xl
              font-semibold
            ">
              Especialistas en sistemas térmicos, eléctricos y de climatización.
              Soluciones integrales para el sector industrial, hotelero y comercial.
            </p>
          </div>

          {/* CTAs (suben de posición) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 shadow-xl"
            >
              Solicitar Servicio
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4
                bg-white/10 backdrop-blur border border-white/30 rounded-lg
                text-white font-semibold
                hover:bg-white/20
                transition-all
              "
            >
              <Settings className="w-5 h-5" />
              Ver Servicios
            </Link>
          </div>

          {/* Features row (bajan) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl pt-2">
            <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
              <CheckCircle className="w-5 h-5 text-white" />
              <div>
                <div className="font-semibold">15+ años</div>
                <div className="text-sm text-white/70">Experiencia técnica</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
              <Zap className="w-5 h-5 text-white" />
              <div>
                <div className="font-semibold">24/7</div>
                <div className="text-sm text-white/70">Soporte</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
              <Shield className="w-5 h-5 text-white" />
              <div>
                <div className="font-semibold">Garantía</div>
                <div className="text-sm text-white/70">En servicios</div>
              </div>
            </div>
          </div>

          {/* Trust pills */}
          <div className="pt-6 border-t border-white/20 max-w-3xl">
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                Personal certificado
              </div>

              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                Normativas industriales
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
