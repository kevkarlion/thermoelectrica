import { COLORS } from '@/src/types';

export const SITE_CONFIG = {
  name: 'Thermolectrica',
  description: 'Servicios Técnicos Industriales - HVAC y Refrigeración',
  url: 'https://thermolectrica.com',
  colors: COLORS,
  contact: {
    phone: '+54 9 11 1234-5678',
    email: 'info@thermolectrica.com',
    address: 'Av. Industrial 1234, Buenos Aires, Argentina',
    whatsapp: '+5491112345678',
  },
  social: {
    linkedin: '#',
    instagram: '#',
    facebook: '#',
  },
} as const;