import React, { ReactElement } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { StkColors } from '../../config/stkColors';
import en from '../../assets/locales/en.json';
import { FILTERS_BUTTON_LABELS } from '../../config/const';
import { Filter } from './Filter';
import { getUserInfo } from '../../services/logic';
import { GlobalStateContext } from '../../models/stkOverflow.types';

export const Filters = (): ReactElement => {
  const { setFilters, filters, userId, setPosts } = React.useContext(GlobalStateContext);

  const onFilterActived = (buttonIndex: number): void => {
    const updatedSearchFilters = [...filters];
    updatedSearchFilters.splice(buttonIndex, 1, !filters[buttonIndex]);
    setFilters(updatedSearchFilters);
  };

  const refreshUserData = async (): Promise<void> => {
    const userInfos = await getUserInfo(userId, filters);
    userInfos && setPosts(userInfos.items);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: StkColors().black }]}>{en.labels.questions}</Text>
      <View style={styles.filtersButtons}>
        {FILTERS_BUTTON_LABELS.map((buttonlabel, index) => (
          <Filter key={index} label={buttonlabel} selected={filters[index]} onPressed={onFilterActived} filterIndex={index} />
        ))}
      </View>
      <TouchableOpacity onPress={async () => refreshUserData()}>
        <Image style={[styles.refreshButton, { backgroundColor: StkColors().white }]} source={require('../../assets/png/refresh.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filtersButtons: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
  },
  refreshButton: {
    height: 20,
    width: 20,
  },
});
