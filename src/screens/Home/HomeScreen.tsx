import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// Expo imports
import * as SplashScreen from 'expo-splash-screen';

// Redux imports
import { useGetAbilityQuery } from 'store/services/applicationApi';

export default function HomeScreen({ route }) {
  const { t } = useTranslation();

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (route.params.appIsReady && !isLoading) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [route.params.appIsReady, isLoading]);

  return (
    <View style={styles.container}>
      <Text>{t('home.hello')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
