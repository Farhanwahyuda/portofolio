const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portofolio' : '';

// Set the base path for environment variables
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

module.exports = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}