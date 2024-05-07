import { COLORS } from '@/constants';
import { ViewType } from '@/enums';
import { LoadingProps } from '@/types';
import { AppModal, AppView } from '@/ui';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const Loading = (props: LoadingProps) => {
  const { isVisible = false, colorLoading = COLORS.LINEAR } = props;
  return (
    <AppModal visible={isVisible}>
      <AppView type={ViewType.View} style={styles.background}>
        <ActivityIndicator size={'large'} color={colorLoading} />
      </AppView>
    </AppModal>
  );
};

export default React.memo(Loading);

const styles = StyleSheet.create({
  background: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: COLORS.BLACK_500,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
