import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import AppView from '../AppView/AppView';
import { ButtonType, ViewType } from '@/enums';
import { IAppTextField } from '@/types';
import AppImage from '../AppImage/AppImage';
import AppButton from '../AppButton/AppButton';
import { COLORS } from '@/constants';
import { scale } from '@/utils';

const AppTextField = (props: IAppTextField) => {
  const { content, containerStyle, inputStyle, isPassword, ...restProps } = props;
  const { leftIcon, value, onChange, rightIcon, placeholder, rightClick } = content ?? {};

  const LeftIcon = leftIcon ?? undefined;
  const RightIcon = rightIcon ?? undefined;

  const _onChange = (text: string) => {
    onChange?.(text);
  };

  return (
    <AppView type={ViewType.View} style={containerStyle}>
      <AppImage source={LeftIcon} style={styles.image} />
      <TextInput
        value={value}
        onChangeText={(text: string) => _onChange(text)}
        allowFontScaling={false}
        style={[inputStyle]}
        cursorColor={COLORS.LAVENDER_GRAY}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        placeholderTextColor={COLORS.LAVENDER_GRAY}
        {...restProps}
      />
      <AppButton type={ButtonType.TouchableOpacity} onPress={rightClick}>
        <AppImage source={RightIcon} style={styles.image} />
      </AppButton>
    </AppView>
  );
};

export default AppTextField;

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(20),
    height: scale(20)
  }
});
