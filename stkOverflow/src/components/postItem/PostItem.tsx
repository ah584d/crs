import React, { ReactElement } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StkColors } from '../../config/StkColors';

export interface PostItemProps {
  title: string;
}

export const PostItem = ({ title }: PostItemProps): ReactElement => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text numberOfLines={1} style={styles.postText}>
          {title}
        </Text>
      </View>
      <Image style={styles.image} resizeMode='stretch' source={require('../../assets/png/chevron.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  titleWrapper: {
    flex: 0.8,
  },
  postText: {
    color: StkColors.black,
  },
  image: {
    width: 24,
    height: 24,
    transform: [{ rotate: '0deg' }],
  },
});
