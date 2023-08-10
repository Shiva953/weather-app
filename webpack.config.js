const path = require('path');
const Dotenv = require('dotenv-webpack'); // Import the dotenv-webpack plugin

module.exports = {
  entry: './src/script.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv(), // Use dotenv-webpack to load environment variables from .env
  ],
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
};