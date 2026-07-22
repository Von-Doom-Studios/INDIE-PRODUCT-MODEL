/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // External-drive filesystem (/Volumes/...) creates AppleDouble shadow
    // files that corrupt Next.js's image cache. Skip the optimizer and let
    // Unsplash serve directly — Unsplash already optimizes via its CDN params.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
};

export default nextConfig;
