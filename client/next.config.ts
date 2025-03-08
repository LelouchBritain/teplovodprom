import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  // basePath: "/<teplovodprom>",
  // assetPrefix: "/<teplovodprom>/",

  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
