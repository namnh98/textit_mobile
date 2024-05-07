import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './mainTab';
import { AppStackParams } from '@/types';
import { LoginScreen, OnboardingScreen, RegisterScreen } from '@/screens';
import { RouteNames } from '@/enums';
import ForgotPasswordScreen from '@/screens/forgotPassword';

const AppStack = createNativeStackNavigator<AppStackParams>();

const MainRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={RouteNames.Onboarding} component={OnboardingScreen} />
      <AppStack.Screen name={RouteNames.Register} component={RegisterScreen} />
      <AppStack.Screen name={RouteNames.Login} component={LoginScreen} />
      <AppStack.Screen name={RouteNames.ForgotPassword} component={ForgotPasswordScreen} />
      <AppStack.Screen name={RouteNames.MainTab} component={MainTab} />
    </AppStack.Navigator>
  );
};

export default MainRoutes;
