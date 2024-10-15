/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';
import nextPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/',
        permanent: true,
      },
    ];
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            exportType: 'named',
          },
        },
      ],
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
});

export default withPWA(withNextIntl()(nextConfig));
