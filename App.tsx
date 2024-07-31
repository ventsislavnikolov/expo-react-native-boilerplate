import 'translations';

import './global.css';

import * as Sentry from '@sentry/react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import React, { useCallback, useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import NetInfo from '@react-native-community/netinfo';
import { Provider } from 'react-redux';
import { RootStackNavigator } from 'navigation';
import { store } from 'store';

Sentry.init({
  debug: true,
  dsn: Constants?.expoConfig?.extra?.sentryDsn,
});

SplashScreen.preventAutoHideAsync();

function App() {
  const [state, setState] = useState({
    appIsReady: false,
    isConnected: null,
  });

  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  const handleLoadingError = (error: any) => {
    Sentry.captureMessage(error);
  };

  const onPrepareDone = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load images, make any API calls you need to do here
        await Asset.loadAsync([]);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        handleLoadingError(error);
      } finally {
        // Tell the application to render
        if (fontsLoaded && !fontError) {
          NetInfo.fetch().then((netInfostate: any) => {
            setState({
              appIsReady: true,
              isConnected: netInfostate.isConnected,
            });
            onPrepareDone();
          });
        }
      }
    }

    prepare();
  }, [fontError, fontsLoaded, onPrepareDone]);

  if (!state.appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootStackNavigator state={state} />
    </Provider>
  );
}

export default Sentry.wrap(App);
