import { PLATFORM } from '@/enums';
import { Platform } from 'react-native';

export const isAndroid = () => {
  return Platform.OS === PLATFORM.ANDROID;
};
