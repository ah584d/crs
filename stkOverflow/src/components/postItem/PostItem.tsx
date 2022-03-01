import React, { ReactElement } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StkColors } from '../../config/stkColors';

export interface PostItemProps {
  title: string;
  url: string;
  openModal: (url: string) => void;
}

export const PostItem = ({ title, url, openModal }: PostItemProps): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => openModal(url)}>
      <View style={styles.titleWrapper}>
        <Text numberOfLines={1} style={[styles.postText, { color: StkColors().black }]}>
          {title}
        </Text>
      </View>
      <Image style={styles.image} resizeMode={'stretch'} source={require('../../assets/png/chevron.png')} />
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
  postText: {},
  image: {
    width: 24,
    height: 24,
    transform: [{ rotate: '0deg' }],
  },
});
