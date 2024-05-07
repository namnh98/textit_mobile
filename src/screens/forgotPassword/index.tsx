import { ViewType } from '@/enums';
import { AppText, AppView } from '@/ui';
import React from 'react';

const ForgotPasswordScreen = () => {
  return (
    <AppView type={ViewType.View}>
      <AppText>Forgot Password</AppText>
    </AppView>
  );
};

export default ForgotPasswordScreen;
