module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: './daily-planner',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: './__tests__',
          components: './daily-planner/components',
          lib: './daily-planner/lib',
          views: './daily-planner/views',
        },
      },
    ],
  ],
};
