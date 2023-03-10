import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const input = ({placeholder, onType, value, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={(iconName = {})} size={25} color="gray" />
    </View>
  );
};

export default input;
