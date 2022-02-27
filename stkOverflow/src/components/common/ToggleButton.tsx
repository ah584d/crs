import React, { ReactElement } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { StkColors } from '../../config/StkColors';

export interface ToggleButtonProps {
  toggleSwitch: () => void;
  isEnabled: boolean;
}
export const ToggleButton = ({ toggleSwitch, isEnabled }: ToggleButtonProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? StkColors.lightgray : StkColors.white}
        onValueChange={toggleSwitch}
        value={isEnabled}
        ios_backgroundColor={StkColors.aliceblue}
      />
      <Text style={styles.container}>{isEnabled ? 'light mode' : 'dark mode'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  label: {
    fontSize: 8,
  },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
});
