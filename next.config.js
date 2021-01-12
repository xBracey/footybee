module.exports = {
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.inline.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ["@svgr/webpack"],
      },
      {
        test: /(?<!\.inline)\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      }
    );

    return config;
  },

  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },
};
