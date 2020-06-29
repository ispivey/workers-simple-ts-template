const path = require('path')
const mode = 'none'

module.exports = {
  output: {
    filename: `worker.js`,
    path: path.join(__dirname, 'worker'),
  },
  mode,
  resolve: {
    extensions: ['.ts',]
  },
  module: {
    rules: [
      {
        loader: 'ts-loader'
      }
    ],
  },
  optimization: {
    minimize: false
  }
}
