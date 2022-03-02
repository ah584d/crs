import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GlobalStateContext } from '../../../App';
import { Theme } from '../../models/stkOverflow.types';
import { ToggleButton } from '../common/ToggleButton';
import en from '../../assets/locales/en.json';
import { StkColors } from '../../config/stkColors';

export const Header = (): ReactElement => {
  const [isEnabled, setIsEnabled] = useState(true);
  const { setTheme, theme } = React.useContext(GlobalStateContext);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.toggleWrapper}>
          <ToggleButton isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
        </View>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={[styles.title, { color: StkColors().black }]}>{en.labels.headerTitle}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  toggleWrapper: {
    marginBottom: 16,
  },
  titleWrapper: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});
