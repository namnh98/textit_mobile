import { Dimensions, Platform } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

let baseScreenWidth = Platform.OS === 'ios' ? 375 : 360;
let baseScreenHeight = Platform.OS === 'ios' ? 667 : 740;

let widthRatio = screenWidth / baseScreenWidth;
let heightRatio = screenHeight / baseScreenHeight;

let baseRatio = Math.min(widthRatio, heightRatio);

export const scale = (value:number, byWidth?:number) => {
  if (byWidth) {
    return widthRatio * value;
  }

  return baseRatio * value;
};

export const SCREEN_WIDTH = screenWidth
export const SCREEN_HEIGHT = screenHeight
