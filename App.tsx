import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { LogBox } from 'react-native';
import * as Font from 'expo-font';
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';
import * as Network from 'expo-network';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Provider } from 'react-redux';
import { store } from 'store';
import 'translations';
import './global.css';
import { RootStackNavigator } from 'navigation';

LogBox.ignoreLogs(['[Reanimated]']);

if (!__DEV__) {
  const devServerPort = 8081;
  let devServerIpAddress = '';
  Network.getIpAddressAsync().then((ip) => {
    devServerIpAddress = ip;
  });

  Sentry.init({
    dsn: Constants.expoConfig?.extra?.sentryDns,
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.Native.ReactNativeTracing({
        shouldCreateSpanForRequest: (url) =>
          !__DEV__ || !url.startsWith(`http://${devServerIpAddress}:${devServerPort}/logs`),
      }),
    ],
  });
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [state, setState] = useState({
    appIsReady: false,
    isConnected: null,
  });

  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
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
        await Font.loadAsync({});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        handleLoadingError(e);
      } finally {
        // Tell the application to render
        if (fontsLoaded && !fontError) {
          NetInfo.fetch().then((netInfostate: any) => {
            setState({
              appIsReady: true,
              isConnected: netInfostate.isConnected,
            });
          });
        }
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!state.appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootStackNavigator state={state} />
    </Provider>
  );
}
