/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/CoreInsightsAI_Website",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
