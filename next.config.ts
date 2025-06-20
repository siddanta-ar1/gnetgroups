/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // if you're using Unsplash
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com', // ← ADD THIS
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // ← ADD THIS
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // ← ADD THIS
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', // Replace with your actual domain
      },
    ],
  },
}

module.exports = nextConfig
