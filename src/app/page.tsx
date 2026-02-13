import Hero from '@/src/components/home/Hero';
// import MissionVision from '@/src/components/shared/';
import CTASection from '@/src/components/shared/sections/CTASection';
import ServiciosHome from '@/src/components/shared/ServiciosHome/ServiciosHome'

export const metadata = {
  title: 'Thermolectrica | Servicios Técnicos Industriales - HVAC y Refrigeración',
  description: 'Especialistas en sistemas térmicos, eléctricos y de climatización. Mantenimiento, instalación y diagnóstico para el sector hotelero, industrial y comercial.',
  keywords: 'HVAC, refrigeración industrial, amoníaco NH₃, climatización, servicios técnicos, mantenimiento industrial',
  openGraph: {
    title: 'Thermolectrica | Servicios Técnicos Industriales',
    description: 'Hacemos que funcione - Especialistas en sistemas térmicos y eléctricos',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiciosHome />
      {/* <MissionVision /> */}
      <CTASection />
    </main>
  );
}