/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     
      {
      protocol: 'https',
      hostname: 'html.rrdevs.net',
      pathname: '/edcare/assets/img/**',
    },
    ],
    
  },
};

module.exports = nextConfig;
