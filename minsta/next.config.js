/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { domains: ["arweave.net", 'image-cache-service-z3w7d7dnea-ew.a.run.app'] },
  externals: { "node:path": "commonjs path" },
 webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // https://stackoverflow.com/a/67478653/470749
      buffer: require.resolve('buffer'),
      
    };

    config.experiments = {
      asyncWebAssembly: true,
      topLevelAwait: true,
      layers: true, // optional, with some bundlers/frameworks it doesn't work without
    }

    return config;
  },
  
};

module.exports = nextConfig;
