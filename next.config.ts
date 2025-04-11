import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: [
      'www.artistcompany.co.kr',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
    ],
  },
};

export default nextConfig;
