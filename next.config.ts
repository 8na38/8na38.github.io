import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/out", // サブディレクトリ名
  assetPrefix: "/out/", // サブディレクトリに配置する場合、アセットのパスを修正
};

export default nextConfig;
