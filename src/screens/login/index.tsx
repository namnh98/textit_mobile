import { Header } from '@/components';
import { ButtonType, RouteNames, ViewType } from '@/enums';
import { AppButton, AppImage, AppText, AppTextField, AppView } from '@/ui';
import React, { useState } from 'react';
import styles from './styles';
import { IC_Eye, IC_EyeSplash, IC_Facebook, IC_Google, IC_Lock, IC_People } from '@/assets';
import { styles as LocalStyle } from '@/constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParams } from '@/types';
import { isAndroid } from '@/utils';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  const onShowHidePassword = () => {
    setShowPassword(pre => !pre);
  };

  const onGoToForgotPassword = () => {
    navigation.navigate(RouteNames.ForgotPassword);
  };

  const onGoToRegister = () => {
    navigation.navigate(RouteNames.Register);
  };

  const inputContent = {
    userNameEmail: {
      leftIcon: IC_People,
      placeholder: 'Email or username'
    },
    password: {
      leftIcon: IC_Lock,
      placeholder: 'Password',
      rightIcon: showPassword ? IC_Eye : IC_EyeSplash,
      rightClick: onShowHidePassword
    }
  };

  return (
    <AppView type={ViewType.View} style={styles.container}>
      <AppView type={ViewType.ScrollView} contentContainerStyle={{ flex: 1 }}>
        <Header isBack />
        <AppView
          type={ViewType.KeyboardAvoidingView}
          behavior={isAndroid() ? 'padding' : undefined}
          style={styles.wrapperMain}>
          <AppView style={styles.mainContent}>
            <AppText style={styles.title}>{'Welcome back'}</AppText>
            <AppText style={styles.subTitle}>{'Enter your credential to continue'}</AppText>
            <AppTextField
              containerStyle={styles.input}
              content={inputContent.userNameEmail}
              inputStyle={styles.inputValue}
            />
            <AppTextField
              isPassword={!showPassword}
              containerStyle={[styles.input, LocalStyle.marginTop24px]}
              content={inputContent.password}
              inputStyle={[styles.inputValue, styles.inputPassword]}
            />
            <AppView style={styles.wrapperButtonForgotPassword}>
              <AppButton type={ButtonType.TouchableOpacity} onPress={onGoToForgotPassword}>
                <AppText style={styles.titleForgotPassword}>{'Forgot Pasword?'}</AppText>
              </AppButton>
            </AppView>
            <AppView>
              <AppButton style={[styles.button, styles.buttonLogin]}>
                <AppText style={styles.titleButtonLogin}>{'Log in'}</AppText>
              </AppButton>
              <AppButton style={[styles.button, styles.buttonFacebook]}>
                <AppImage source={IC_Facebook} />
                <AppText style={styles.titleButtonFacebook}>{'Log in with Facebook'}</AppText>
              </AppButton>
              <AppButton style={[styles.button, styles.buttonGoogle]}>
                <AppImage source={IC_Google} />
                <AppText style={styles.titleButtonGoogle}>{'Log in with Google'}</AppText>
              </AppButton>
            </AppView>
          </AppView>
          <AppView type={ViewType.View} style={styles.wrapperNotHaveAccount}>
            <AppText style={styles.titleButtonSignUp}>{`Don't have account?`}</AppText>
            <AppButton style={styles.buttonSignUp} onPress={onGoToRegister}>
              <AppText style={styles.titleButtonSignUp}>{'Sign up'}</AppText>
            </AppButton>
          </AppView>
        </AppView>
      </AppView>
    </AppView>
  );
};

export default LoginScreen;
