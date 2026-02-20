import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: '/contact', destination: '/about', permanent: true },
      { source: '/cv', destination: '/about/cv', permanent: true },
      { source: '/playground', destination: '/software-engineer', permanent: true },
      { source: '/software-engineer/playground', destination: '/software-engineer', permanent: true },
      { source: '/software-engineer/bitcoin', destination: '/software-engineer', permanent: true },
      { source: '/projects', destination: '/software-engineer', permanent: true },
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

export default nextConfig
