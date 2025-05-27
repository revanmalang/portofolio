/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // penting untuk static export
  images: {
    unoptimized: true,  // karena image optimization Next.js tidak bekerja dengan static export
  },
}

module.exports = nextConfig;
