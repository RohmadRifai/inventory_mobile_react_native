/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import Config from 'react-native-config';

const AuthSignin: React.FC<AuthSigninProps> = () => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text className="text-red-500">{t('hello')}</Text>
      <Text>Config: {Config?.API_URL}</Text>
    </View>
  );
};

export default AuthSignin;
