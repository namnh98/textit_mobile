import { Animated, ViewStyle } from 'react-native';
import { Optional } from './common';

export interface ExpandingDotProps {
  data?: Array<Object>;
  scrollX?: Animated.Value;
  containerStyle?: ViewStyle;
  dotStyle?: ViewStyle;
  inActiveDotOpacity?: number;
  inActiveDotColor?: string;
  expandingDotWidth?: number;
  activeDotColor?: string;
  inActiveBorderDotColor?: string;
  activeBorderDotColor?: string;
}

export interface LoadingProps {
  isVisible?: boolean;
  colorLoading?: string;
}

export interface HeaderProps {
  isBack?: boolean;
  leftComponent?: Optional;
  rightComponent?: Optional;
  title?: {
    content?: string;
    style?: {};
  };
}
