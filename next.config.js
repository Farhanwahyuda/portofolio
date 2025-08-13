/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portofolio';

// For GitHub Pages deployment
const basePath = isProd ? `/${repoName}` : '';
const assetPrefix = isProd ? `/${repoName}/` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  distDir: 'out',
  
  // Ensure trailing slash for all URLs
  trailingSlash: true,
  
  // Base path for GitHub Pages
  basePath: basePath,
  assetPrefix: assetPrefix,
  trailingSlash: true,
  
  // Add custom webpack config to handle asset paths
  webpack: (config) => {
    if (assetPrefix) {
      config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;
    }
    return config;
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Ensure trailing slashes for consistent URLs
  trailingSlash: true,
  
  // Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };
    return config;
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

// For local development, remove basePath and assetPrefix
if (!isProd) {
  nextConfig.basePath = '';
  nextConfig.assetPrefix = '';
  nextConfig.env.NEXT_PUBLIC_BASE_PATH = '';
}

module.exports = nextConfig;
