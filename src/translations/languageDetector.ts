import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

const languageDetector: any = {
  async: true,
  cacheUserLanguage: () => {},
  detect: async (callback: any) => {
    await AsyncStorage.getItem('language', (err, lng) => {
      if (err || !lng) {
        const bestLng = Localization.locale.replace('_', '-');

        callback(bestLng);
        return;
      }
      callback(lng);
    });
  },
  init: () => {},
  type: 'languageDetector',
};

export default languageDetector;
