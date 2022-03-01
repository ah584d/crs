import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../App';
import { Theme } from '../../models/stkOverflow.types';
import { ToggleButton } from '../common/ToggleButton';

export const Header = (): ReactElement => {
  const [isEnabled, setIsEnabled] = useState(true);
  const { setTheme, theme } = React.useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  console.log(` actual theme: ${theme}`);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.toggleWrapper}>
          <ToggleButton isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
        </View>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{'Get Stack Overflow posts'}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
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
