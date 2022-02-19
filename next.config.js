module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://api.devfolio.co/:path*',
      },
    ]
  },
}
