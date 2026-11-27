/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/lezing",
        destination: "/over-niek",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
