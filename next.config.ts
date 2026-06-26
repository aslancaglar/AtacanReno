import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  images: {
    qualities: [25, 50, 75, 95, 100],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.convex.cloud",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|ico|json)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/platrerie-faux-plafonds",
        destination: "/platrerie",
        permanent: true,
      },
      {
        source: "/platrerie-faux-plafonds",
        destination: "/platrerie",
        permanent: true,
      },
      {
        source: "/services/isolation-renovation-energetique",
        destination: "/isolation-thermique-et-renovation-energetique",
        permanent: true,
      },
      {
        source: "/isolation-renovation-energetique",
        destination: "/isolation-thermique-et-renovation-energetique",
        permanent: true,
      },
      {
        source: "/services/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
