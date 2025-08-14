import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/go/linkedin",
        destination: "https://www.linkedin.com/company/freshertoday",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
