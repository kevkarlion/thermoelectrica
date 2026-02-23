// NUEVO (Recomendado)
const nextConfig = {
  images: {
    // Añade aquí los valores que te pide el error (75 es el default)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Opcional
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Opcional
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ejemplo.com",
        port: "",
        pathname: "/**", // Esto permite todas las rutas del dominio
      },
      {
        protocol: "https",
        hostname: "otro-sitio.org",
        port: "",
        pathname: "/fotos/**", // Esto SOLO permite imágenes en la carpeta /fotos
      },
    ],
  },
};

export default nextConfig;
