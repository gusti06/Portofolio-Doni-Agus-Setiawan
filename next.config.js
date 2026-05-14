const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: repoBasePath || undefined,
  assetPrefix: repoBasePath || undefined,
}

module.exports = nextConfig
