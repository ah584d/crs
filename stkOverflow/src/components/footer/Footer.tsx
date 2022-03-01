import React, { ReactElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import en from '../../assets/locales/en.json';
import { StkColors } from '../../config/stkColors';

export interface FooterProps {
  postNumber: number;
}

export const Footer = ({ postNumber }: FooterProps): ReactElement => {
  const label = `${en.labels.footer_1} ${postNumber} ${en.labels.footer_2}`;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: StkColors().black }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 12,
  },
  text: {
    fontWeight: 'bold',
  },
});
