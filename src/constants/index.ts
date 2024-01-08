import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const isSmallDevice = deviceWidth < 375;
export const APP_STATE = { BACKGROUND: 'background' };
export const PERMISSIONS_STATUS = { GRANTED: 'granted' };
export const OS_TYPES = { ANDROID: 'android', IOS: 'ios' };
export const DEFAULT = 'Default';
export const NOTIFICATION = 'Notification';
export const NOTIFICATION_ORIGIN = {
  RECEIVED: 'received',
  SELECTED: 'selected',
};

export const navigationOptiosTransperant = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
  },
  title: '',
};

export { default as palette } from './palette';
