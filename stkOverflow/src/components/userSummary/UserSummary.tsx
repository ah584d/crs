import React, { ReactElement } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { StkColors } from '../../config/stkColors';
import en from '../../assets/locales/en.json';

export interface UserSummaryProps {
  avatar: string;
  name: string;
  reputation: string;
  acceptRate: number;
}

export const UserSummary = ({ name, reputation, acceptRate, avatar }: UserSummaryProps): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Image style={[styles.avatar, { borderColor: StkColors().black }]} source={{ uri: avatar }} />
        <View style={styles.userDetails}>
          <Text style={[styles.text, { color: StkColors().black }]}>{name}</Text>
          <Text style={[styles.text, { color: StkColors().black }]}>{reputation}</Text>
          <Text style={[styles.text, { color: StkColors().black }]}>{acceptRate}</Text>
        </View>
      </View>
      <View style={styles.filter}>
        <Text style={[styles.text, { color: StkColors().black }]}>{'Questions: '}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  userCard: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  userDetails: {
    flex: 0.5,
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
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
});
