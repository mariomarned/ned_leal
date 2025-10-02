const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Custom resolver for AsyncStorage on web
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web' && moduleName === '@react-native-async-storage/async-storage') {
    return {
      filePath: path.resolve(__dirname, 'ned_leal_mobile/utils/AsyncStorageMock.js'),
      type: 'sourceFile',
    };
  }
  // Fallback to default resolver
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;