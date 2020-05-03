const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  }
})
