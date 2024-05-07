import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { SCREEN_WIDTH, scale } from '@/utils';
import { EOnboardingItem } from '@/types';
import { AppView } from '@/ui';
import { ViewType } from '@/enums';
import AppText from '@/ui/AppText/AppText';
import { COLORS, FONTS } from '@/constants';

const OnboardingItem = (props: EOnboardingItem) => {
  const { data } = props;
  const { image } = data;

  return (
    <AppView type={ViewType.View} style={styles.container}>
      <Image source={image} style={styles.image} />
      <AppView type={ViewType.View} style={styles.wrapperContent}>
        <AppText style={styles.title} numberOfLines={2}>
          {data.title}
        </AppText>
        <AppText style={styles.content}>{data.content}</AppText>
      </AppView>
    </AppView>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapperContent: {
    paddingHorizontal: scale(16),
    width: SCREEN_WIDTH,
    marginTop: scale(12)
  },
  image: {
    resizeMode: 'contain',
    width: SCREEN_WIDTH
  },
  title: {
    fontSize: scale(24),
    color: COLORS.HAITI,
    fontFamily: FONTS.MEDIUM
  },
  content: {
    fontSize: scale(13),
    fontFamily: FONTS.REGULAR,
    marginTop: scale(8)
  }
});
