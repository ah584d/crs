import React, { ReactElement } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { SCREEN_WIDTH } from '../../config/const';

export const Spinner = (): ReactElement => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
      {/* large has a height of 36 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: SCREEN_WIDTH / 2 - 36 / 2, // we remove half of the animation icon size (36), to make sure it appears in the middle, no matter the size screen
  },
});
