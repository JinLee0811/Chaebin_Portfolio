/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "img.youtube.com"], // 허용할 이미지 도메인 추가
  },
};

module.exports = nextConfig;
