/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  experimental: {
    reactCompiler: true,
    viewTransition: true,
  },
};
export default nextConfig;
