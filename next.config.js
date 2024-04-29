/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
      ignoreDuringBuilds: true,
  },
  images: {
    domains: ['media.valorant-api.com']
  }
}

module.exports = nextConfig
