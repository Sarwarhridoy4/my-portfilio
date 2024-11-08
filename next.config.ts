/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      images: {
        allowRemotePatterns: [
          {
            protocol: "https",
            hostname: "github-readme-streak-stats.herokuapp.com",
          },
          {
            protocol: "https",
            hostname: "github-readme-stats.vercel.app",
          },
        ],
      },
    },
  },
};

module.exports = nextConfig;
