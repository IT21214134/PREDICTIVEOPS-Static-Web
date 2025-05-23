/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/PREDICTIVEOPS-Static-Web",
  images: {
    domains: ['assets.aceternity.com', 'mysliit-my.sharepoint.com'],
  },
  output: 'export',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // basePath: '/PREDICTIVEOPS-Static-Web', // Replace with your repository name
  // assetPrefix: '/PREDICTIVEOPS-Static-Web/',
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//         domains: ['assets.aceternity.com', 'mysliit-my.sharepoint.com'],
//       },
//       output: 'export',
// };

// export default nextConfig;
