import { ButtonType } from '@/enums';
import { IAppButton } from '@/types';
import React, { ReactElement } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Pressable,
  Keyboard
} from 'react-native';

const AppButton = (props: IAppButton) => {
  const { type, children, style, onPress, isDismissKeyboard, ...restProps } = props;

  const renderWrapper = () => {
    switch (type) {
      case ButtonType.TouchableWithoutFeedBack:
        return TouchableWithoutFeedback;

      case ButtonType.TouchableHighlight:
        return TouchableHighlight;

      case ButtonType.Pressable:
        return Pressable;

      default:
        return TouchableOpacity;
    }
  };

  const Wrapper = renderWrapper() as React.ElementType;

  const _onPress = () => {
    if (type === ButtonType.TouchableWithoutFeedBack && isDismissKeyboard) {
      Keyboard.dismiss();
    }
    onPress?.();
  };

  return (
    <Wrapper style={style} onPress={_onPress} {...restProps}>
      {children}
    </Wrapper>
  );
};

export default AppButton;
