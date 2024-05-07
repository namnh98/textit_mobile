import { IC_Back } from '@/assets';
import { COLORS } from '@/constants';
import { ButtonType, ViewType } from '@/enums';
import { HeaderProps } from '@/types';
import { AppButton, AppText, AppView } from '@/ui';
import AppImage from '@/ui/AppImage/AppImage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

const Header = (props: HeaderProps) => {
  const { isBack, leftComponent, rightComponent, title } = props;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const LeftComponent = leftComponent ?? null;
  const RightComponent = rightComponent ?? null;
  const TitleContent = title?.content ?? '';
  const TitleStyle = title?.style ?? {};

  return (
    <AppView type={ViewType.SafeAreaView} style={styles.container}>
      {isBack ? (
        <AppButton type={ButtonType.TouchableOpacity} onPress={goBack}>
          <AppImage source={IC_Back} style={styles.imageBack} />
        </AppButton>
      ) : (
        LeftComponent?.()
      )}
      {title && <AppText style={TitleStyle}>{TitleContent}</AppText>}
      {RightComponent?.()}
    </AppView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageBack: {
    tintColor: COLORS.BLACK
  }
});
