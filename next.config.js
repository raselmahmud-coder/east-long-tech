const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/ImageLoader.js",
  },
  distDir: "dist",
  // Other Next.js configuration options can be added here

  webpack: (config, options) => {
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

    // Apply additional custom webpack configurations here

    return config; // Important: Return the modified config
  },
};
if (process.env.NODE_ENV === "production") {
  nextConfig.output = "export";
}

module.exports = nextConfig;
