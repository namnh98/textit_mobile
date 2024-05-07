import { Animated, FlatList } from 'react-native';
import React, { useRef } from 'react';
import { ButtonType, RouteNames, ViewType } from '@/enums';
import { COLORS, listOnboardingContent } from '@/constants';
import OnboardingItem from './components/onboardingItem';
import { AppStackParams, EItemOnboard, Optional } from '@/types';
import { AppButton, AppText, AppView } from '@/ui';
import { ExpandingDot } from '@/components';
import styles from './styles';
import { scale } from '@/utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  const navigateCreateAccount = () => {
    navigation.navigate(RouteNames.Register);
  };

  const navigateLogin = () => {
    navigation.navigate(RouteNames.Login);
  };

  const renderItem = ({ item }: { item: EItemOnboard }) => {
    return <OnboardingItem data={item} />;
  };

  return (
    <AppView type={ViewType.SafeAreaView}>
      <FlatList
        horizontal
        pagingEnabled
        data={listOnboardingContent}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        keyExtractor={(item: Optional) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false
        })}
      />
      <ExpandingDot
        data={listOnboardingContent}
        expandingDotWidth={scale(80)}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={styles.dotStyle}
        activeDotColor={COLORS.SCAMPI}
        inActiveDotColor={COLORS.LAVENDER_GRAY}
        activeBorderDotColor={COLORS.ATHENS_GRAY}
        containerStyle={styles.containerDot}
      />
      <AppView type={ViewType.View} style={styles.bottomWrapper}>
        <AppButton
          type={ButtonType.TouchableOpacity}
          style={styles.buttonCreateAccount}
          onPress={navigateLogin}>
          <AppText style={styles.titleButtonCreateAccount}>Log in</AppText>
        </AppButton>
        <AppView type={ViewType.View} style={styles.contentBottom}>
          <AppText style={styles.titleBottom}>Don't have account?</AppText>
          <AppButton
            type={ButtonType.TouchableOpacity}
            style={styles.buttonLoginBottom}
            onPress={navigateCreateAccount}>
            <AppText style={styles.titleButtonLogin}>Register</AppText>
          </AppButton>
        </AppView>
      </AppView>
    </AppView>
  );
};

export default OnboardingScreen;
