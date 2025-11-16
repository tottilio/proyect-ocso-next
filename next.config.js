/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // 🔥 Desactiva el cache de Webpack (el que está crasheando)
    config.cache = false;

    return config;
  },
}

module.exports = nextConfig;