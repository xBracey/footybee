const path = require("path");

module.exports = {
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
      gatsby: path.resolve(__dirname, "gatsbyLinkMock.js"),
    };

    return config;
  },
};