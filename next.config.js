/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: '.next',
  images: {
    domains: [
      'wax.bloks.io',
      'bloks.io',
      'facings.mypinata.cloud',
      'robohash.org',
      'ipfs.ledgerwise.io',
    ],
  },
};

module.exports = nextConfig;
