const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  // Determine if we are in the development phase
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;

  // Define the base Next.js configuration
  let nextConfig = {
    distDir: "dist",
    // Other Next.js configuration options can be added here
    webpack(config, options) {
      const { isServer } = options;
      const prefix = config.assetPrefix ?? config.basePath ?? "";
      config.module.rules.push({
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: `${prefix}/_next/static/media/`,
              outputPath: `${isServer ? "../" : ""}static/media/`,
              name: "[name].[hash].[ext]",
            },
          },
        ],
      });

      // Add more custom webpack modifications here if needed

      return config; // Always return the modified config
    },
  };

  // Adjust the configuration based on the phase
  if (isDevelopment) {
    // Development specific configurations
    nextConfig = {
      ...nextConfig,
      images: {
        unoptimized: true, // Disables image optimization in development
      },
      // Any other development-specific configurations
    };
  } else {
    // Production specific configurations
    nextConfig = {
      ...nextConfig,
      output: 'export', // Needed for static site generation for cPanel deployments
      // Any other production-specific configurations
    };
  }

  return nextConfig;
};














/* const webpackConfig = {
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

const nextConfig = {
  output: "export",
  distDir: "dist",
  // Other Next.js configuration options can be added here
};

module.exports = { ...nextConfig, ...webpackConfig };
 */