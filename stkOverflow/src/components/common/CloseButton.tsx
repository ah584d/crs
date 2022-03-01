import React, { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import en from '../../assets/locales/en.json';
import { StkColors } from '../../config/stkColors';

export interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton = ({ onClose }: CloseButtonProps): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClose}>
      <Text style={[styles.text, { color: StkColors().black }]}>{en.labels.close}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontWeight: 'bold',
    paddingBottom: 8,
  },
});
