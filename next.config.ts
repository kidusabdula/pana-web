import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build",
  // Ensure Next traces files from the actual project root to avoid mis-inferred workspace roots
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      // Normalize extended/alias slugs back to canonical ones used in the app
      { source: "/services/digital-paper-print-solutions", destination: "/services/digital-print", permanent: true },
      { source: "/services/indoor-outdoor-signage", destination: "/services/signage", permanent: true },
      { source: "/services/flex-banners", destination: "/services/flex-banner", permanent: true },
      { source: "/services/vinyl-graphics", destination: "/services/vinyl", permanent: true },
      { source: "/services/fabric-printing", destination: "/services/fabric", permanent: true },
      { source: "/services/promotional-items", destination: "/services/promotional", permanent: true },
      { source: "/services/creative-design", destination: "/services/design", permanent: true },
      { source: "/services/event-services", destination: "/services/events", permanent: true },
    ];
  },
};

export default nextConfig;
