import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { useGetAbilityQuery } from 'store/services/applicationApi';

export default function HomeScreen({ route }) {
  const { t, i18n } = useTranslation();

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'en' : 'en');
  };

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (route.params.appIsReady && !isLoading) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [route.params.appIsReady, isLoading]);

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-[--theme-fg]'>{t('home.hello')}</Text>
      <Button title='Change Language' onPress={changeLanguage} />
    </View>
  );
}
