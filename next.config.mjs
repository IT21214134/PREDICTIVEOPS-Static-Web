/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/PREDICTIVEOPS-Static-Web",
  assetPrefix: "/PREDICTIVEOPS-Static-Web/",
  images: {
    unoptimized: true,
    domains: ['assets.aceternity.com', 'mysliit-my.sharepoint.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // basePath: '/PREDICTIVEOPS-Static-Web', // Replace with your repository name
  // assetPrefix: '/PREDICTIVEOPS-Static-Web/',
};

export default nextConfig;
