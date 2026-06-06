const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefixEnv = process.env.NEXT_PUBLIC_ASSET_PREFIX || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: repoBasePath || undefined,
  assetPrefix: assetPrefixEnv || repoBasePath || undefined,
}

module.exports = nextConfig
