// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);

// module.exports = config;

// Learn more https://docs.expo.io/guides/customizing-metro
const { mergeConfig } = require("@react-native/metro-config");
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = {
  resolver: {
    sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs"],
    assetExts: ["glb", "gltf", "png", "jpg", "ttf"],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

