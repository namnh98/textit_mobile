import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import MainRoutes from './src/navigation';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
