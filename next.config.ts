import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Fotos do projeto conceito vêm de bancos gratuitos (ver src/content/photos.ts).
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    qualities: [75],
  },
};

export default nextConfig;
