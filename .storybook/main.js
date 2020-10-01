const path = require("path");

module.exports = {
  stories: ["../src/site/components/**/**/*.stories.tsx"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    config.resolve.modules = [
      path.resolve(__dirname, "../src", "site"),
      "node_modules",
    ];

    return config;
  },
};
