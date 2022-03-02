import React, { ReactElement } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StkColors } from '../../config/stkColors';
import en from '../../assets/locales/en.json';
import { Filters } from './FiIters';

export interface UserSummaryProps {
  avatar: string;
  name: string;
  reputation: string;
  acceptRate: number;
}

export const UserSummary = ({ name, reputation, acceptRate, avatar }: UserSummaryProps): ReactElement => {
  const blackColor4HookOrder = StkColors().black;

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Image style={[styles.avatar, { borderColor: StkColors().black }]} source={{ uri: avatar }} />
        <View style={styles.userDetails}>
          <Text style={[styles.text, { color: StkColors().black }]}>{name}</Text>
          <Text style={[styles.text, { color: StkColors().black }]}>{`${en.labels.reputation}${reputation}`}</Text>
          {acceptRate && <Text style={[styles.text, { color: blackColor4HookOrder }]}>{`${en.labels.acceptRate}${acceptRate}`}</Text>}
        </View>
      </View>
      <Filters />
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
    flex: 0.6,
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
});
