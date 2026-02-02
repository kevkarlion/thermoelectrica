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
    <section className="relative min-h-[80dvh] flex items-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Fondo texturizado con más profundidad */}
      <div className="absolute inset-0 z-0">
        {/* Capa base oscura */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/5 via-gray-800/3 to-gray-900/5" />

        {/* Patrón geométrico sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0c33.137 0 60 26.863 60 60 0 33.137-26.863 60-60 60C26.863 120 0 93.137 0 60 0 26.863 26.863 0 60 0zm0 20c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40z' fill='%231F3C73' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gradientes sutiles para profundidad */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-[var(--color-primary)]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-accent)]/3 to-transparent" />

        {/* Brillos difuminados */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary)]/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--color-accent)]/6 via-transparent to-transparent rounded-full blur-3xl" />

        {/* Líneas divisorias decorativas */}
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-300/20 to-transparent" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-32 w-0.5 bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-32 w-0.5 bg-gradient-to-t from-[var(--color-accent)]/30 to-transparent" />

        {/* Puntos decorativos */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[var(--color-accent)]/30 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[var(--color-primary)]/20 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Columna izquierda - Texto y CTA */}
          <div className="space-y-10 backdrop-blur-md bg-white/50 p-10 rounded-3xl border border-gray-200/60 shadow-sm">
            {/* Badge */}
            <div
  className="
    inline-flex items-center gap-2 px-6 py-2.5 rounded-full
    bg-gradient-to-r from-orange-500/20 to-orange-500/5
    text-orange-400 text-sm font-semibold
    border border-orange-500/30
    shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_30px_rgba(255,140,0,0.15)]
  "
>
  <Shield className="w-4 h-4" />
  Servicios Técnicos Industriales
</div>


            {/* Título */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
                Hacemos que
                <span className="block bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] bg-clip-text text-transparent">
                  Funcione
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Especialistas en sistemas térmicos, eléctricos y de
                climatización. Soluciones integrales para el sector hotelero,
                industrial y comercial.
              </p>
            </div>

            {/* Beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-center gap-4 p-5 bg-white/80 rounded-xl border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-300">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center 
        bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                >
                  <CheckCircle className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">15+ años</div>
                  <div className="text-sm text-gray-500">
                    Experiencia técnica
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white/80 rounded-xl border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-300">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center 
        bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                >
                  <Zap className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Soporte 24/7
                  </div>
                  <div className="text-sm text-gray-500">
                    Emergencias técnicas
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 
      shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all"
              >
                <span>Solicitar Servicio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 
      text-gray-700 font-semibold 
      bg-white/80 border border-gray-300/70 rounded-lg 
      hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] 
      hover:bg-white transition-all duration-300 backdrop-blur-sm"
              >
                <Settings className="w-5 h-5" />
                Ver Servicios
              </Link>
            </div>

            {/* Trust */}
            <div className="pt-6 border-t border-gray-200/60">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200/60">
                  <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                  Personal certificado
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200/60">
                  <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                  Garantía en servicios
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen con elementos gráficos */}
          <div className="relative">
            {/* Marco decorativo con efectos 3D */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/80 bg-gradient-to-br from-white to-gray-100">
              {/* Gradiente de borde */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-[var(--color-accent)]/5 z-10" />

              {/* Efecto de luz en borde */}
              <div className="absolute inset-0 border-[1px] border-white/30 rounded-2xl z-20" />

              {/* Imagen principal */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/heross.png"
                  alt="Técnico especialista Thermolectrica trabajando en sistema HVAC industrial"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  style={{
                    objectPosition: "center 50%",
                  }}
                />

                {/* Overlay de gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
              </div>

              {/* Elementos gráficos flotantes */}
              <div className="absolute -top-6 -right-6 w-32 h-32 z-30">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-white/90 rounded-2xl shadow-xl rotate-6 backdrop-blur-sm" />
                  <div className="absolute inset-2 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-xl rotate-6 flex items-center justify-center shadow-inner">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-6 w-24 h-24 z-30">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-white/90 rounded-full shadow-xl backdrop-blur-sm" />
                  <div className="absolute inset-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full flex items-center justify-center shadow-inner">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas flotantes */}
            <div className="absolute -bottom-6 right-8 z-20">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl p-5 border border-gray-300/50 transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Proyectos ejecutados
                  </div>
                </div>
              </div>
            </div>

            {/* Etiqueta de servicio */}
            <div className="absolute -left-4 top-1/3 transform -translate-y-1/2 z-20">
              <div className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white px-5 py-3 rounded-r-lg shadow-lg flex items-center gap-3 group hover:pr-6 transition-all duration-300">
                <Settings className="w-5 h-5" />
                <span className="text-sm font-semibold whitespace-nowrap">
                  HVAC Industrial
                </span>
              </div>
            </div>

            {/* Elementos gráficos de conexión */}
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 z-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-0.5 bg-linear-to-r from-[var(--color-accent)]/40 to-transparent" />
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] shadow-md" />
                <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-[var(--color-accent)]/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
