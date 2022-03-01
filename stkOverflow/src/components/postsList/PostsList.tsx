import React, { ReactElement, useCallback, useRef, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ModalizeWebView } from 'react-native-modalize-webview';
import Modalize from 'react-native-modalize';
import { StkColors } from '../../config/stkColors';
import { PostItem } from '../postItem/PostItem';

export interface PostsListProps {
  posts: Record<string, any>[] | undefined;
}

export const PostsList = ({ posts }: PostsListProps): ReactElement => {
  const [currentUrl, setCurrentUrl] = useState<string>();

  const modalizeRef = useRef<Modalize>(null);

  const handleOpen = useCallback(() => {
    if (modalizeRef.current) {
      modalizeRef.current?.open();
    }
  }, []);

  const openModal = (url: string) => {
    setCurrentUrl(url);
    handleOpen();
  };

  return (
    <>
      <FlatList
        data={posts?.slice(0, 15)}
        renderItem={(post: Record<string, any>) => <PostItem title={post?.item?.title} url={post?.item?.link} openModal={openModal} />}
        keyExtractor={(item, index) => `${item?.accepted_answer_id}-${index}`}
        ItemSeparatorComponent={() => <View style={[styles.separator, { borderBottomColor: StkColors().lightgray }]} />}
      />
      <ModalizeWebView
        modalStyle={{ flex: 1 }}
        ref={modalizeRef}
        handlePosition={'inside'}
        webViewProps={{
          source: {
            uri: currentUrl ?? 'https://goggle.com',
          },
        }}
      />
    </>
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
  },
});
