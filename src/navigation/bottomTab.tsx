import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Optional } from '@/types';

const BottomTab = (props: Optional) => {
  const { state, navigation, descriptors } = props;

  const _onPress = (index: number) => {
    navigation.navigate({ name: state.routes[index].name, merge: true });
  };

  return (
    <View style={styles.container}>
      {state.routes?.map((route: Optional, index: number) => {
        const { options } = descriptors[route.key];
        const label: string =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused: boolean = state.index === index;

        return (
          <TouchableOpacity
            onPress={() => _onPress(index)}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={options?.tabBarIcon} style={{ tintColor: isFocused ? 'red' : 'blue' }} />
            <Text style={{ color: isFocused ? 'red' : 'blue' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8
  }
});
