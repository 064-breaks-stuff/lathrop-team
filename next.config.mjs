/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // easier for GoDaddy static hosting if you export later
  },
  async redirects() {
    return [
      {
        source: '/reviews',
        destination: '/#reviews',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;