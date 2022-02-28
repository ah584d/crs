import React, { ReactElement } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { StkColors } from '../../config/StkColors';

export interface InputFieldProps {
  onTextChanged: (value: string) => void;
  editable: boolean;
}

export const InputField = ({ onTextChanged, editable }: InputFieldProps): ReactElement => {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.input]} editable={true} onChangeText={onTextChanged} placeholder='type user id' keyboardType='default' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: StkColors.lightgray,
  },
});
