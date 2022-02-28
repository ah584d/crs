import { useTheme } from '@react-navigation/native';
import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../App';
import { ToggleButton } from '../common/ToggleButton';

export const Header = (): ReactElement => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  };
  const { setTheme, theme } = React.useContext(ThemeContext);
  const { colors } = useTheme();

  console.log(` actual theme: ${theme} - ${colors}`);

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
