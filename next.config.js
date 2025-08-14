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
  // Ensure static files are copied correctly
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
  // Copy the public folder to the output directory
  // This ensures all static assets are available at the correct path
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