/**
 * @see: https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L137
 */
const nextConfig = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: './',
    jsx: 'react',
    paths: {
      '@components/*': ['src/components/*'],
      '@containers/*': ['src/containers/*'],
      '@theme': ['src/theme'],
      '@store/*': ['src/store/*'],
      '@utils/*': ['src/utils/*'],
      '@api': ['src/api'],
    },
  },
  exclude: ['node_modules'],
};

module.exports = nextConfig;
