import React, {useEffect} from 'react';
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
// import Router from './src/router';
import {useTranslation} from 'react-i18next';
import { getLanguage } from "./../../redux"
import i18n from './../../localization/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginScreen = () => {

  const {t, i18n} = useTranslation();
  const dispatch = useDispatch()

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
      console.log('Store value error', e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
        console.log('This is current language', value);
        i18n.changeLanguage(value);
      }
    } catch (e) {
      // error reading value
      console.log('No async store value', e);
      console.log('get value error', e);
    }
    console.log('get data ended');
  };

  useEffect(() => {
    console.log('Use effect started');
    getData();
  }, []);

  return (
    <View>
      <Text>LoginScreen</Text>
      <View>
        <Text>{t('Hey Yo Im at home')}</Text>
        <Button
          title={'en'}
          onPress={() => {
            i18n.changeLanguage('en');
            console.log('en start');
            storeData('en');
          }}
        />
        <Button
          title={'es'}
          onPress={() => {
            i18n.changeLanguage('es');
            console.log('es start');
            storeData('es');
          }}
        />
        <Button
          title={'de'}
          onPress={() => {
            i18n.changeLanguage('de');
            console.log('de start');
            storeData('de');
            dispatch(getLanguage())
          }}
        />
      </View>
    </View>
  )
}

export default LoginScreen