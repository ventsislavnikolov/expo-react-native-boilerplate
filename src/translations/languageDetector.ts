import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback) => {
    await AsyncStorage.getItem('language', (err, lng) => {
      if (err || !lng) {
        const bestLng = Localization.locale.replace('_', '-');

        callback(bestLng);
        return;
      }
      callback(lng);
    });
  },
  cacheUserLanguage: () => {},
};

export default languageDetector;
