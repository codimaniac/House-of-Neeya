import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL('https://res.cloudinary.com/dagamvlju/image/upload/f_auto,q_auto/**'),
      new URL('https://res.cloudinary.com/dagamvlju/image/upload/q_auto/f_auto/**')
    ],
  }
}

export default nextConfig;
