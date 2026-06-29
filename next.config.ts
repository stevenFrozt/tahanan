import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // allowedDevOrigins: [
   //    "local-origin.dev",
   //    "*.local-origin.dev",
   //    "http://192.168.68.104:3000",
   // ],
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
         },
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
         },
         {
            protocol: "https",
            hostname: "images.pexels.com",
         },
      ],
   },
};

export default nextConfig;
