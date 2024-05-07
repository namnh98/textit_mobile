import { ImageSourcePropType, ScrollViewProps, TextStyle, ViewProps } from 'react-native';
import { Optional } from './common';

type IChildren = {
  children: string | JSX.Element | JSX.Element[];
};

export type IAppView = IChildren &
  ViewProps &
  ScrollViewProps & {
    type?: string;
    behavior?: string;
  };

export type IAppText = IChildren & {
  fontSize?: number;
  color?: string;
  style?: TextStyle;
  numberOfLines?: number;
};

export type IAppImage = {
  source: ImageSourcePropType;
  style?: {};
};

export type IAppButton = IChildren & {
  type?: string;
  style?: {};
  onPress?: () => void;
  isDismissKeyboard?: boolean;
};

export type IAppModal = IChildren & {
  visible?: boolean;
  style?: {};
  animationType?: Optional;
  isTransparent?: boolean;
};

export type IAppTextField = {
  content?: {
    leftIcon?: Optional;
    value?: string;
    onChange?: (text: string) => void;
    rightIcon?: Optional;
    placeholder?: string;
    rightClick?: () => void;
  };
  containerStyle?: {};
  inputStyle?: {};
  isPassword?: boolean;
};
