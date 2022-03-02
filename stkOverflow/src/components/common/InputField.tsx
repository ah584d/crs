import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { StkColors } from '../../config/stkColors';
import en from '../../assets/locales/en.json';

export interface InputFieldProps {
  onTextChanged: (value: string) => void;
  editable: boolean;
}

export const InputField = ({ onTextChanged, editable }: InputFieldProps): ReactElement => {
  const [text, setText] = useState(''); // avraham to improve

  // We must define this color here because of the condition below (!editable) which leads to hook warning.
  const editFieldBackGroundColor = StkColors().crimson;

  return (
    <View style={styles.container}>
      <View style={[styles.inputWrapper, { borderBottomColor: StkColors().lightgray }]}>
        <TextInput
          style={[styles.input, { backgroundColor: editable ? StkColors().white : StkColors().lightsteelblue, color: StkColors().black }]}
          editable={editable}
          onChangeText={(updatedValue: string) => {
            setText(updatedValue);
            onTextChanged(updatedValue);
          }}
          placeholder={en.labels.defaultHint}
          keyboardType={'default'}
          value={text}
        />
        <TouchableOpacity
          style={styles.resetButtonParent}
          onPress={() => {
            setText('');
            onTextChanged('');
          }}>
          <Image style={[styles.resetButton, { backgroundColor: StkColors().white }]} source={require('../../assets/png/close.png')} />
        </TouchableOpacity>
      </View>
      {!editable ? (
        <View style={styles.statusWrapper}>
          <Text style={[styles.status, { color: editFieldBackGroundColor }]}>{en.labels.loading}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    paddingLeft: 12,
  },
  resetButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
  },
  resetButton: {
    height: 20,
    width: 20,
  },
  statusWrapper: {
    paddingTop: 12,
    alignSelf: 'flex-start',
  },
  status: {
    fontSize: 16,
  },
});
