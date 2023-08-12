/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "headshots-inc.com",
        port: "",
        pathname: "/wp-content/uploads/2021/04/Website-Photo-3.png",
      },
    ],
  },
};
