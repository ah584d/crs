import React, { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StkColors } from '../../config/stkColors';

export interface FilterProps {
  selected: boolean;
  label: string;
  onPressed: (index: number) => void;
  filterIndex: number;
}

export const Filter = ({ selected, label, onPressed, filterIndex }: FilterProps): ReactElement => {
  return (
    <TouchableOpacity onPress={() => onPressed(filterIndex)} style={[styles.filterButton, { backgroundColor: selected ? StkColors().dodgerblue : StkColors().white }]}>
      <Text style={[styles.text, { color: StkColors().black }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    alignContent: 'center',
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});
