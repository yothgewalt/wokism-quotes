/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  styledComponents: true,
  productionBrowserSourceMaps: false,
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    localeDetection: true
  },
  images: {
    domains: []
  }
}

module.exports = nextConfig
