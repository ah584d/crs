import React, { ReactElement } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { StkColors } from '../../config/StkColors';
import { PostItem } from '../postItem/PostItem';

export interface PostsListProps {
  posts: Record<string, any>[] | undefined;
}

export const PostsList = ({ posts }: PostsListProps): ReactElement => {
  return (
    <FlatList
      data={posts?.slice(0, 15)}
      renderItem={(post: Record<string, any>) => <PostItem title={post?.item?.title} />}
      keyExtractor={(item, index) => `${item?.accepted_answer_id}-${index}`}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: StkColors.lightgray,
  },
});
