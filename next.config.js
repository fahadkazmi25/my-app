/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/v0/b/next-app-55fdd.appspot.com/o/**',
        },
        {
            protocol: 'https',
            hostname: '**', // This allows images from any HTTPS domain
          },
      ],
    },
  };
  
  module.exports = nextConfig;
  