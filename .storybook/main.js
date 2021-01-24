const path = require("path");

module.exports = {
  addons: ["@storybook/addon-actions", "@storybook/addon-knobs"],
  stories: ["../src/site/components/**/**/*.stories.tsx"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: async config => {
    // modify storybook's file-loader rule to avoid conflicts with your inline svg
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.inline.svg$/;

    config.module.rules.push({
      test: /\.inline.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    config.resolve.modules = [
      path.resolve(__dirname, "../src", "site"),
      "node_modules",
    ];

    config.resolve.alias = {
      "next/link": path.resolve(__dirname, "nextLinkMock.js"),
      redux$: path.resolve(__dirname, "reduxMock.js"),
    };

    return config;
  },
};
