export default ({ config }) => ({
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/adaptive-icon.png',
    },
    package: 'ventsislavnikolov.expo',
    permissions: ['android.permission.READ_CONTACTS', 'android.permission.WRITE_CONTACTS'],
    userInterfaceStyle: 'automatic',
    versionCode: 1,
  },
  assetBundlePatterns: ['**/*'],
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
      publicApi: process.env.EXPO_PUBLIC_API_URL,
    },
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
    buildNumber: '1',
    bundleIdentifier: 'ventsislavnikolov.expo',
    infoPlist: {
      NSContactsUsageDescription:
        'Allowing access to your contacts will enable you to send SOS signal to emergency contacts.',
    },
    supportsTablet: true,
    userInterfaceStyle: 'automatic',
  },
  name: config.name,
  orientation: 'portrait',
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          buildToolsVersion: '33.0.0',
          compileSdkVersion: 33,
          kotlinVersion: '1.7.10',
          targetSdkVersion: 33,
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
        contactsPermission:
          'Allowing access to your contacts will enable you to send SOS signal to emergency contacts.',
      },
    ],
    [
      'expo-font',
      {
        fonts: 'node_modules/@expo-google-fonts/roboto/Roboto_400Regular.ttf',
      },
    ],
    'sentry-expo',
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
  version: '0.0.0',
  web: {
    favicon: './assets/favicon.png',
  },
});
