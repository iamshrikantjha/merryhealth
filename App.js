import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Router from './src/router';
import {useTranslation} from 'react-i18next';
import i18n from './src/localization/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import LoginScreen from './src/screens/LoginScreen';

const initI18n = i18n;

const App = () => {
  return (
    // <Router />
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};

export default App;
