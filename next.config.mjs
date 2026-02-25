/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solo dejamos los permisos de las imágenes, que es lo único que realmente necesitas
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 'api.dicebear.com' }
    ],
  },
};

export default nextConfig;