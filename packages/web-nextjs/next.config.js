/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */

const withTM = require('next-transpile-modules')(['components'], {
  resolveSymlinks: true,
})

module.exports = withTM({
  future: { webpack5: true },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
  images: {
    domains: ['assets.vercel.com', 'www.personality-insights.com'],
    formats: ['image/avif', 'image/webp'],
  },
})
