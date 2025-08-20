/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ For external images (Credly badges, etc.)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.credly.com", // for certification badges
      },
      {
        protocol: "https",
        hostname: "cdn.credly.com", // sometimes used
      },
    ],
  },
};

module.exports = nextConfig;