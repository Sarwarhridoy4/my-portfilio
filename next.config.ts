/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      "github-readme-streak-stats.herokuapp.com",
      "github-readme-stats.vercel.app",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
