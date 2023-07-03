import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, View, Button } from 'react-native';
import { styled } from 'nativewind';

// Expo imports
import * as SplashScreen from 'expo-splash-screen';

// Redux imports
import { useGetAbilityQuery } from 'store/services/applicationApi';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);

export default function HomeScreen({ route }) {
  const { t, i18n } = useTranslation();

  const { isLoading } = useGetAbilityQuery({ limit: 20, offset: 0 });

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ena' : 'en');
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
    <StyledView className='flex-1 items-center justify-center bg-white dark:bg-slate-800'>
      <StyledText className='text-slate-800 dark:text-white'>{t('home.hello')}</StyledText>
      <StyledButton title='Change Language' onPress={changeLanguage} />
    </StyledView>
  );
}
