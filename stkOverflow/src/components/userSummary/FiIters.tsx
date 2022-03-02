import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StkColors } from '../../config/stkColors';
import en from '../../assets/locales/en.json';

export interface FiltersProps {}

export const Filters = (): ReactElement => {
  const [searchFilters, setSearchFilters] = useState<boolean[]>([false, false, false]);
  return (
    <View style={styles.filter}>
      <Text style={[styles.text, { color: StkColors().black }]}>{en.labels.questions}</Text>
      <View style={styles.filtersButtons}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={[styles.text, { color: StkColors().black }]}>{en.labels.date}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={[styles.text, { color: StkColors().black }]}>{en.labels.answers}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={[styles.text, { color: StkColors().black }]}>{en.labels.views}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    alignContent: 'center',
    paddingHorizontal: 5,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    paddingBottom: 8,
  },
});
