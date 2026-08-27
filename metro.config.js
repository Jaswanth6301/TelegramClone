 /**
 * Metro configuration for React Native 0.87
 * https://reactnative.dev/docs/metro
 */

const {
  getDefaultConfig,
  mergeConfig,
} = require('@react-native/metro-config');

const defaultConfig =
  getDefaultConfig(__dirname);

const {
  resolver: {
    sourceExts,
    assetExts,
  },
} = defaultConfig;

const config = {

  transformer: {

    getTransformOptions:
      async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),

  },

  resolver: {

    // Keep normal React Native asset extensions.
    assetExts: [
      ...assetExts,
    ],

    // Keep normal React Native source extensions.
    sourceExts: [
      ...sourceExts,
    ],

    // Use React Native's package exports correctly.
    unstable_enablePackageExports: true,

  },

};

module.exports =
  mergeConfig(
    defaultConfig,
    config,
  );