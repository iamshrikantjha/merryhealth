import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';

const Router = () => {
  return (
    <NavigationContainer>
        <LoginScreen />
    </NavigationContainer>
  );
}

export default Router;