import type { Metadata } from 'next';

import '@/src/app/globals.css';
import Footer from '@/src/components/shared/Footer/Footer';
import WhatsAppButton from '@/src/components/shared/ui/WhatsAppButton';
import Navbar from '../components/shared/Navbar/Navbar';
import { Space_Grotesk, Inter } from 'next/font/google';



const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['700'], // <--- ¡ASEGÚRATE DE INCLUIR EL 700 AQUÍ!
});


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Thermolectrica | Servicios Técnicos Industriales',
    template: '%s | Thermolectrica'
  },
  description: 'Especialistas en sistemas térmicos, eléctricos y de climatización. Mantenimiento, instalación y diagnóstico HVAC, refrigeración industrial y amoníaco.',
  keywords: 'HVAC, refrigeración industrial, amoníaco, climatización, servicios técnicos, mantenimiento industrial',
  authors: [{ name: 'Thermolectrica' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://thermolectrica.com',
    siteName: 'Thermolectrica',
    title: 'Thermolectrica | Servicios Técnicos Industriales',
    description: 'Hacemos que funcione - Especialistas en sistemas térmicos y eléctricos',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thermolectrica - Servicios Técnicos Industriales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thermolectrica | Servicios Técnicos Industriales',
    description: 'Hacemos que funcione - Especialistas en sistemas térmicos y eléctricos',
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1F3C73" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Thermolectrica",
              "description": "Servicios técnicos industriales especializados en HVAC, refrigeración y sistemas eléctricos",
              "url": "https://thermolectrica.com",
              "logo": "https://thermolectrica.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Industrial 1234",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-9-11-1234-5678",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              }
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}