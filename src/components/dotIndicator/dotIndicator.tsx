import { COLORS } from '@/constants';
import { ExpandingDotProps } from '@/types';
import { scale } from '@/utils';
import React from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';

const ExpandingDot = ({
  scrollX,
  data,
  dotStyle,
  containerStyle,
  inActiveDotOpacity,
  inActiveDotColor,
  expandingDotWidth,
  activeDotColor,
  inActiveBorderDotColor,
  activeBorderDotColor
}: ExpandingDotProps) => {
  const { width } = useWindowDimensions();

  const defaultProps = {
    inActiveDotColor: inActiveDotColor || COLORS.ATHENS_GRAY,
    inActiveDotOpacity: inActiveDotOpacity || 1,
    expandingDotWidth: expandingDotWidth || scale(20),
    dotWidth: (dotStyle?.width as number) || scale(10),
    activeDotColor: activeDotColor || COLORS.SCAMPI,
    inActiveBorderDotColor: inActiveBorderDotColor || 'transparent',
    activeBorderDotColor: activeBorderDotColor || COLORS.LAVENDER_GRAY
  };

  return (
    <View pointerEvents={'none'} style={[styles.containerStyle, containerStyle]}>
      {data?.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

        const backgroundColor = scrollX?.interpolate({
          inputRange,
          outputRange: [
            defaultProps.inActiveDotColor,
            defaultProps.activeDotColor,
            defaultProps.inActiveDotColor
          ],
          extrapolate: 'clamp'
        });
        const opacity = scrollX?.interpolate({
          inputRange,
          outputRange: [defaultProps.inActiveDotOpacity, 1, defaultProps.inActiveDotOpacity],
          extrapolate: 'clamp'
        });
        const expand = scrollX?.interpolate({
          inputRange,
          outputRange: [
            defaultProps.dotWidth,
            defaultProps.expandingDotWidth,
            defaultProps.dotWidth
          ],
          extrapolate: 'clamp'
        });
        const borderColor = scrollX?.interpolate({
          inputRange,
          outputRange: [
            defaultProps.inActiveBorderDotColor,
            defaultProps.activeBorderDotColor,
            defaultProps.inActiveBorderDotColor
          ],
          extrapolate: 'clamp'
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={[
              styles.dotStyle,
              dotStyle,
              { width: expand },
              { opacity },
              { borderColor },
              { backgroundColor }
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: scale(20),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotStyle: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    marginHorizontal: scale(5)
  }
});

export default ExpandingDot;
