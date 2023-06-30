import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

// Expo imports
import * as Font from 'expo-font';
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';
import * as Network from 'expo-network';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

// eslint-disable-next-line import/no-extraneous-dependencies
import Entypo from '@expo/vector-icons/Entypo';

// import redux store
import { Provider } from 'react-redux';

// Redux imports
import { store } from 'store';

// Import navigation
import { RootStackNavigator } from 'navigation';

// Translations imports
import 'translations';

// Init Sentry in production
if (!__DEV__) {
  const devServerPort = 8081;
  let devServerIpAddress = '';
  Network.getIpAddressAsync().then((ip) => {
    devServerIpAddress = ip;
  });

  Sentry.init({
    dsn: Constants.manifest?.extra?.sentryDsn,
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.Native.ReactNativeTracing({
        shouldCreateSpanForRequest: (url) =>
          !__DEV__ || !url.startsWith(`http://${devServerIpAddress}:${devServerPort}/logs`),
      }),
    ],
  });
}

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [state, setState] = useState({
    appIsReady: false,
    isConnected: null,
  });

  const handleLoadingError = (error) => {
    Sentry.Native.captureException(error);
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load images, make any API calls you need to do here
        await Asset.loadAsync([]);
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({ ...Entypo.font });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        handleLoadingError(e);
      } finally {
        // Tell the application to render
        NetInfo.fetch().then((netInfostate: any) => {
          setState({
            appIsReady: true,
            isConnected: netInfostate.isConnected,
          });
        });
      }
    }

    prepare();
  }, []);

  if (!state.appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootStackNavigator state={state} />
    </Provider>
  );
}
