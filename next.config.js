/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co'"],
  },
  webpack: (config, { isServer }) => {
  if (!isServer) {
      // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      }
  }

  return config;
}
}

  module.exports = nextConfig
// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,
//     reactStrictMode: true,
//     images: {
//       domains: ["i.scdn.co'"],
//     },
//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           "fs": empty,
//           "path": false,
//           "os": false,
//         }
//       }
//       return config
//     },
//   }
// }