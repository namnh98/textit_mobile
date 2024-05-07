import { IAppImage } from '@/types';
import React from 'react';
import { Image } from 'react-native';

const AppImage = (props: IAppImage) => {
  const { source, ...restProps } = props;
  return <Image source={source} {...restProps} />;
};

export default AppImage;
