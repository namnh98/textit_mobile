import { IAppModal } from '@/types';
import React from 'react';
import { Modal } from 'react-native';

const AppModal = (props: IAppModal) => {
  const { children, visible, style, animationType, isTransparent = true, ...restProps } = props;
  return (
    <Modal
      transparent={isTransparent}
      visible={visible}
      style={style}
      animationType={animationType}
      {...restProps}>
      {children}
    </Modal>
  );
};

export default AppModal;
