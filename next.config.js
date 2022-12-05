const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

module.exports = withNextra(nextConfig);
