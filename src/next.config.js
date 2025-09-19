/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    // Enable CSS v4 support
    cssChunking: 'loose'
  }
}

module.exports = nextConfig