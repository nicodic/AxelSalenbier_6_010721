const path = require('path');

module.exports = {
  // entry: ["./js/app.js", "./js/photographe.js"],
  entry : {
    "./app" : "./js/app.js",
    "./photographe" : "./js/photographe.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};