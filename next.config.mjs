/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

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
    config.resolve.alias['@'] = path.resolve('./');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
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
  env: {
    APP_NAME: env('NEXT_PUBLIC_APP_NAME'),
    APP_DESCRIPTION: env('NEXT_PUBLIC_APP_DESCRIPTION'),
  },
};

const withPWA = nextPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
});

export default withPWA(withNextIntl(nextConfig));
