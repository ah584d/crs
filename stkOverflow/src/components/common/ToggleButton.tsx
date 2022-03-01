import React, { ReactElement } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { StkColors } from '../../config/stkColors';
import en from '../../assets/locales/en.json';

export interface ToggleButtonProps {
  toggleSwitch: () => void;
  isEnabled: boolean;
}
export const ToggleButton = ({ toggleSwitch, isEnabled }: ToggleButtonProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        trackColor={{ false: StkColors().lightgrey, true: StkColors().lightskyblue }}
        thumbColor={isEnabled ? StkColors().lightgray : StkColors().white}
        onValueChange={toggleSwitch}
        value={isEnabled}
        ios_backgroundColor={StkColors().aliceblue}
      />
      <Text style={[styles.container, { color: StkColors().black }]}>{isEnabled ? en.labels.lightMode : en.labels.darkMode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 8,
  },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
});
