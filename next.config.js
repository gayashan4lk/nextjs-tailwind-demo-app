/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    enableUndici: true,
  },
  server: {
    https: false,
  },
}

module.exports = nextConfig
