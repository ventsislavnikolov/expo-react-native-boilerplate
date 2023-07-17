module.exports = ({ config }) => ({
  name: config.name,
  slug: config.slug,
  scheme: config.scheme,
  version: '0.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    userInterfaceStyle: 'automatic',
    bundleIdentifier: 'ventsislavnikolov.expo',
    buildNumber: '1',
    infoPlist: {
      NSContactsUsageDescription:
        'Allowing access to your contacts will enable you to send SOS signal to emergency contacts.',
    },
  },
  android: {
    package: 'ventsislavnikolov.expo',
    versionCode: 1,
    userInterfaceStyle: 'automatic',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    permissions: ['android.permission.READ_CONTACTS', 'android.permission.WRITE_CONTACTS'],
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
      publicApi: process.env.EXPO_PUBLIC_API_URL,
    },
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 33,
          targetSdkVersion: 33,
          buildToolsVersion: '33.0.0',
          kotlinVersion: '1.7.10',
        },
        ios: {
          deploymentTarget: '13.0',
          useFrameworks: 'static',
        },
      },
    ],
    [
      'expo-contacts',
      {
        contactsPermission:
          'Allowing access to your contacts will enable you to send SOS signal to emergency contacts.',
      },
    ],
    'sentry-expo',
    'expo-localization',
  ],
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: 'ventsislavnikolov',
          project: 'expo-react-native-boilerplate',
        },
      },
    ],
  },
});
