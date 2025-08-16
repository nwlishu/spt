import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', "sptpart-bucket.s3.ap-southeast-1.amazonaws.com"],

  },
};

export default nextConfig;
