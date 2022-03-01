import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { StkColors } from '../../config/stkColors';
import en from '../../assets/locales/en.json';

export interface InputFieldProps {
  onTextChanged: (value: string) => void;
  editable: boolean;
}

export const InputField = ({ onTextChanged, editable }: InputFieldProps): ReactElement => {
  const [text, setText] = useState(''); // avrahm to improve

  return (
    <View style={styles.container}>
      <View style={[styles.inputWrapper, { borderBottomColor: StkColors().lightgray }]}>
        <TextInput
          style={[styles.input, { backgroundColor: editable ? StkColors().white : StkColors().lightsteelblue }]}
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
          style={styles.closeButtonParent}
          onPress={() => {
            setText('');
            onTextChanged('');
          }}>
          <Image style={styles.closeButton} source={require('../../assets/png/close.png')} />
        </TouchableOpacity>
      </View>
      {!editable ? (
        <View style={styles.statusWrapper}>
          <Text style={[styles.status, { color: StkColors().crimson }]}>{en.labels.loading}</Text>
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
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
  },
  closeButton: {
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
