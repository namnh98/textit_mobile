import { Header, Loading } from '@/components';
import { ButtonType, PLATFORM, RouteNames, ViewType } from '@/enums';
import { AppButton, AppImage, AppText, AppTextField, AppView } from '@/ui';
import React, { useState } from 'react';
import styles from './styles';
import { IC_Eye, IC_Facebook, IC_Google, IC_Lock, IC_Mail, IC_People } from '@/assets';
import { REGISTER_VALUE_DEFAULT, TYPE_INPUT } from '@/constants';
import { isAndroid } from '@/utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParams } from '@/types';

const RegisterScreen = () => {
  const [registerValue, setRegisterValue] = useState(REGISTER_VALUE_DEFAULT);
  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  const onGoToLogin = () => {
    navigation.navigate(RouteNames.Login);
  };

  const onChangeValue = (text: string, type: string) => {
    setRegisterValue({ ...registerValue, [type]: text });
  };

  const FormRegister = {
    fullName: {
      leftIcon: IC_People,
      value: registerValue[TYPE_INPUT.FULL_NAME],
      onChange: (text: string) => onChangeValue(text, TYPE_INPUT.FULL_NAME),
      placeholder: 'Fullname'
    },
    email: {
      leftIcon: IC_Mail,
      value: registerValue[TYPE_INPUT.EMAIL],
      onChange: (text: string) => onChangeValue(text, TYPE_INPUT.EMAIL),
      placeholder: 'Email'
    },
    password: {
      leftIcon: IC_Lock,
      value: registerValue[TYPE_INPUT.PASSWORD],
      onChange: (text: string) => onChangeValue(text, TYPE_INPUT.PASSWORD),
      rightIcon: IC_Eye,
      placeholder: 'Password'
    },
    passwordConfirm: {
      leftIcon: IC_Lock,
      value: registerValue[TYPE_INPUT.PASSWORD_CONFIRMATION],
      onChange: (text: string) => onChangeValue(text, TYPE_INPUT.PASSWORD_CONFIRMATION),
      rightIcon: IC_Eye,
      placeholder: 'Password confirm'
    }
  };

  return (
    <AppView type={ViewType.SafeAreaView} style={styles.container}>
      <AppView type={ViewType.ScrollView} contentContainerStyle={styles.main}>
        <Header isBack />
        <AppView
          type={ViewType.KeyboardAvoidingView}
          behavior={isAndroid() ? 'padding' : undefined}
          style={styles.main}>
          <AppView type={ViewType.View} style={styles.mainContent}>
            <AppView type={ViewType.View} style={styles.contentTop}>
              <AppText style={styles.titleCreateAccount}>{'Create account'}</AppText>
              <AppText style={styles.subTitleCreateAccount}>{'Sign up to get started!'}</AppText>
            </AppView>
            <AppView type={ViewType.View} style={styles.contentMiddle}>
              <AppTextField
                content={FormRegister.fullName}
                containerStyle={styles.wrapperInput}
                inputStyle={styles.input}
              />
              <AppTextField
                content={FormRegister.email}
                containerStyle={styles.wrapperInput}
                inputStyle={styles.input}
              />
              <AppTextField
                content={FormRegister.password}
                containerStyle={styles.wrapperInput}
                inputStyle={styles.input}
              />
              <AppTextField
                content={FormRegister.passwordConfirm}
                containerStyle={styles.wrapperInput}
                inputStyle={styles.input}
              />
            </AppView>
            <AppButton style={[styles.button, styles.buttonSignUp]}>
              <AppText style={styles.titleButtonSignUp}>{'Sign up'}</AppText>
            </AppButton>
            <AppButton style={[styles.button, styles.buttonFacebook]}>
              <AppImage source={IC_Facebook} />
              <AppText style={styles.titleButtonFacebook}>{'Sign up with Facebook'}</AppText>
            </AppButton>
            <AppButton style={[styles.button, styles.buttonGoogle]}>
              <AppImage source={IC_Google} />
              <AppText style={styles.titleButtonGoogle}>{'Sign up with Google'}</AppText>
            </AppButton>
          </AppView>
          <AppView type={ViewType.View} style={styles.wrapperHaveAccount}>
            <AppText style={styles.titleButtonSignIn}>{'Already have account?'}</AppText>
            <AppButton style={styles.buttonSignIn} onPress={onGoToLogin}>
              <AppText style={styles.titleButtonSignIn}>{'Sign in'}</AppText>
            </AppButton>
          </AppView>
        </AppView>
      </AppView>
    </AppView>
  );
};

export default RegisterScreen;
