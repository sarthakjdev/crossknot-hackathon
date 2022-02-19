module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.devfolio.co/:path*',
      },
    ]
  },
}
