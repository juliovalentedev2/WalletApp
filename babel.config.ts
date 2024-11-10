module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            'Screens': './src/screens',
            'Components': './src/components',
            'Routes': './src/routes',
            'Assets': './src/assets',
          },
        },
      ],
    ],
  };
};
