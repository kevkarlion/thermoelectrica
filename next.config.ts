// NUEVO (Recomendado)
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ejemplo.com',
        port: '',
        pathname: '/**', // Esto permite todas las rutas del dominio
      },
      {
        protocol: 'https',
        hostname: 'otro-sitio.org',
        port: '',
        pathname: '/fotos/**', // Esto SOLO permite imágenes en la carpeta /fotos
      },
    ],
  },
}

export default nextConfig;