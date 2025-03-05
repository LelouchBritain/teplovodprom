import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений, т.к. GH Pages не поддерживает Image Optimization
  },
  basePath: "/<teplovodprom>",
  assetPrefix: "/<teplovodprom>/",
};

export default nextConfig;
