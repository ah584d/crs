import React, { ReactElement } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { StkColors } from '../../config/StkColors';

export interface InputFieldProps {
  onTextChanged: (value: string) => void;
}

export const InputField = ({ onTextChanged }: InputFieldProps): ReactElement => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onTextChanged} placeholder='type user id' keyboardType='default' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 220,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: StkColors.lightgray,
  },
});
