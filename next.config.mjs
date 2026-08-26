/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // easier for GoDaddy static hosting if you export later
  },
};

export default nextConfig;