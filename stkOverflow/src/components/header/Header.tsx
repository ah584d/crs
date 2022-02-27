import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StkColors } from '../../config/StkColors';
import { ToggleButton } from '../common/ToggleButton';

export const Header = (): ReactElement => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <View style={styles.toggleWrapper}>
          <ToggleButton isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
        </View>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{'Get Stack Overflow posts'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: StkColors.white,
    paddingBottom: 48,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  toggleWrapper: {
    paddingTop: 16,
    paddingRight: 16,
  },
  titleWrapper: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    // fontFamily: 'bold',
  },
});
