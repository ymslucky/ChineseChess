/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出到 out/ 目录：前端为纯静态站点，适配 EdgeOne Pages 静态托管；
  // 动态能力全部由 EdgeOne Pages Functions（functions/ 目录）提供。
  output: 'export',
  // 静态导出模式下必须关闭 Next.js 内置图片优化（平台直接托管原始资源）
  images: {
    unoptimized: true,
  },
  // 使用目录式 URL（/play/ 而非 /play），确保静态托管与 CDN 正确解析
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
