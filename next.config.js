const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/portofolio' : '',
  assetPrefix: isProd ? '/portofolio/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}