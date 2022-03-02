import React, { ReactElement } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StkColors } from '../../config/stkColors';
import { getHtmlContent } from '../../services/logic';

export interface PostItemProps {
  title: string;
  url: string;
  score: number;
  openModal: (url: string) => void;
}

export const PostItem = ({ title, url, openModal, score }: PostItemProps): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => openModal(url)}>
      <View style={styles.titleWrapper}>
        <Text numberOfLines={1} style={[styles.postText, { color: StkColors().black }]}>
          {getHtmlContent(title)}
        </Text>
        <Text numberOfLines={1} style={[styles.postTextSubtitle, { color: StkColors().gray }]}>
          score: {score}
        </Text>
      </View>
      <Image style={styles.image} source={require('../../assets/png/chevron.png')} />
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
  postTextSubtitle: {
    fontSize: 12,
  },
  image: {
    width: 18,
    height: 10,
    transform: [{ rotate: '-90deg' }],
  },
});
