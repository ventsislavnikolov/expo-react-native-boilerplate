module.exports = ({ config }) => ({
  name: config.name,
  slug: config.slug,
  scheme: config.scheme,
  version: config.version,
  orientation: 'portrait',
  icon: './assets/icon.png',
  assetBundlePatterns: ['**/*'],
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/splash.png',
    resizeMode: 'contain',
  },
  ios: {
    bundleIdentifier: 'com.ventsislavnikolov.expo.boilerplate',

    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/adaptive-icon.png',
    },
    package: 'com.ventsislavnikolov.expo.boilerplate',
    permissions: ['android.permission.READ_CONTACTS', 'android.permission.WRITE_CONTACTS'],
  },
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
    },
    sentryDns: process.env.SENTRY_DNS,
    publicApi: process.env.EXPO_PUBLIC_API_URL,
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          targetSdkVersion: 34,
          compileSdkVersion: 34,
          buildToolsVersion: '34.0.0',
        },
        ios: {
          deploymentTarget: '13.4',
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
    [
      '@sentry/react-native/expo',
      {
        organization: 'ventsislavnikolov',
        project: 'expo-react-native-boilerplate',
      },
    ],
    'expo-localization',
  ],
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
});
