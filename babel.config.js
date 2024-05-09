module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          screens: './src/screens/books',
          assets: './src/assets',
          components: './src/components',
          navigation: './src/navigation',
          utility: './src/utility',
          store: './src/store',
        },
      },
    ],
  ],
};
