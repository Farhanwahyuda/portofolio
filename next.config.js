/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// For GitHub Pages, use empty string if repository name is 'username.github.io', otherwise use repository name
const repoName = '';

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  // Ensure all routes work properly with GitHub Pages
  trailingSlash: true,
  // Fix for static export with dynamic routes
  skipTrailingSlashRedirect: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add custom webpack config to handle GitHub Pages routing
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
