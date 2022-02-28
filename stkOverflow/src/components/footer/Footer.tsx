import React, { ReactElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface FooterProps {
  postNumber: number;
}

export const Footer = ({ postNumber }: FooterProps): ReactElement => {
  const label = `Total of ${postNumber} questions found`;
  return (
    <View style={styles.container}>
      <Text style={styles.container}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
});
