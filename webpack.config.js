const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  resolve: {
    fallback: {
      // assert: require.resolve("assert/"),
      stream: require.resolve("stream-browserify")
    }
  }
  
  
  // Other webpack configurations...
};
