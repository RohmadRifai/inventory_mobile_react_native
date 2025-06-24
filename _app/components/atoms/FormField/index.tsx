import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {FormFieldProps} from './type';

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base">{title}</Text>
      <View className="border-2 w-full h-16 px-4 rounded-2xl focus:border-red-700 flex flex-row items-center">
        <TextInput
          className="flex-1 text-base text-black"
          value={value}
          placeholder={placeholder}
          placeholderClassName="text-gray-400"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          keyboardType={keyboardType}
          cursorColor={'#000000'}
        />
      </View>
    </View>
  );
};

export default FormField;
