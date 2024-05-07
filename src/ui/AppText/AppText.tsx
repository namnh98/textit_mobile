import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { scale } from '@/utils';
import { COLORS } from '@/constants';
import { FONTS } from '@/constants';
import { IAppText } from '@/types';

const AppText = (props: IAppText) => {
  const { children, style, numberOfLines, ...restProps } = props;
  return (
    <Text
      style={[styles.default, style]}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      {...restProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  default: {
    fontSize: scale(13),
    color: COLORS.LINEAR,
    fontFamily: FONTS.REGULAR
  }
});
