import React, { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton = ({ onClose }: CloseButtonProps): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClose}>
      <Text style={styles.text}>{'close'}</Text>
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
