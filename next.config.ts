import type { NextConfig } from 'next'
import withPWA from '@ducanh2912/next-pwa'

const pwa = withPWA({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  async redirects() {
    return [
      { source: '/contact', destination: '/about', permanent: true },
      { source: '/cv', destination: '/about/cv', permanent: true },
      { source: '/playground', destination: '/software-engineer/playground', permanent: true },
      { source: '/projects', destination: '/software-engineer/projects', permanent: true },
      { source: '/projects/:path*', destination: '/software-engineer/projects/:path*', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/**',
      },
    ],
  },
}

export default pwa(nextConfig)
