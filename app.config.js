module.exports = ({ config }) => ({
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/adaptive-icon.png',
    },
    package: 'com.ventsislavnikolov.expo.boilerplate',
    permissions: ['android.permission.READ_CONTACTS', 'android.permission.WRITE_CONTACTS'],
  },
  assetBundlePatterns: ['**/*'],
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
    },
    publicApi: process.env.EXPO_PUBLIC_API_URL,
    sentryDns: process.env.SENTRY_DNS,
  },
  hooks: {
    postPublish: [
      {
        config: {
          organization: 'ventsislavnikolov',
          project: 'expo-react-native-boilerplate',
        },
        file: 'sentry-expo/upload-sourcemaps',
      },
    ],
  },
  icon: './assets/icon.png',
  ios: {
    bundleIdentifier: 'com.ventsislavnikolov.expo.boilerplate',
    supportsTablet: true,
  },
  name: config.name,
  orientation: 'portrait',
  plugins: [
    [
      '@sentry/react-native/expo',
      {
        organization: 'ventsislavnikolov',
        project: 'expo-react-native-boilerplate',
      },
    ],
    [
      'expo-build-properties',
      {
        android: {
          buildToolsVersion: '34.0.0',
          compileSdkVersion: 34,
          targetSdkVersion: 34,
        },
        ios: {
          deploymentTarget: '15.1',
          useFrameworks: 'static',
        },
      },
    ],
    [
      'expo-contacts',
      {
        contactsPermission: 'Allow $(PRODUCT_NAME) to access your contacts.',
      },
    ],
    [
      'expo-font',
      {
        fonts: ['node_modules/@expo-google-fonts/inter/Inter_900Black.ttf'],
      },
    ],
    'expo-localization',
  ],
  scheme: config.scheme,
  slug: config.slug,
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/splash.png',
    resizeMode: 'contain',
  },
  userInterfaceStyle: 'automatic',
  version: config.version,
  web: {
    favicon: './assets/favicon.png',
  },
});
