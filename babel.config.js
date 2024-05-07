module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [".ios.js", ".android.js", ".ios.jsx", ".android.jsx", ".js", ".jsx", ".json", ".ts", ".tsx"],      
        alias: {
          "@": './src',
        }
      }
    ],
  ]
};
