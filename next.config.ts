/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*', // matches all paths
        has: [
          {
            type: 'host',
            value: 'bptechandresourcesltd.com.ng', // non-www
          },
        ],
        destination: 'https://www.bptechandresourcesltd.com.ng/:path*', // redirect to www
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;