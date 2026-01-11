/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kitehouse-somabay.com",
      },
      {
        protocol: "https",
        hostname: "www.thebreakers-somabay.com",
      },
      {
        protocol: "https",
        hostname: "images.alltours.de",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    qualities: [75, 85],
  },
};

module.exports = nextConfig;
