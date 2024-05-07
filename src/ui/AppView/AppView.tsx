import { View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { ViewType } from '@/enums';
import { IAppView } from '@/types';

const AppView = (props: IAppView) => {
  const { type, children, style, ...rest } = props;
  const containerView = () => {
    switch (type) {
      case ViewType.SafeAreaView:
        return SafeAreaView;

      case ViewType.ScrollView:
        return ScrollView;

      case ViewType.KeyboardAvoidingView:
        return KeyboardAvoidingView;

      default:
        return View;
    }
  };

  const MainWrapper = containerView() as React.ElementType;

  return (
    <MainWrapper style={style} {...rest}>
      {children}
    </MainWrapper>
  );
};

export default AppView;
