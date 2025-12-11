/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "kitehouse-somabay.com",
      "www.thebreakers-somabay.com",
      "images.alltours.de",
    ],

    qualities: [25, 50, 75, 100],
  },
};

module.exports = nextConfig;
