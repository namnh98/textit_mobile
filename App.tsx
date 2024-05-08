import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import MainRoutes from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
