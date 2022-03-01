import React, { ReactElement, useRef, useState } from 'react';
import { StyleSheet, FlatList, View, SafeAreaView, Modal } from 'react-native';
import WebView from 'react-native-webview';
import { StkColors } from '../../config/stkColors';
import { CloseButton } from '../common/CloseButton';
import { Spinner } from '../common/Spinner';
import { PostItem } from '../postItem/PostItem';

export interface PostsListProps {
  posts: Record<string, any>[] | undefined;
}

export const PostsList = ({ posts }: PostsListProps): ReactElement => {
  const [currentUrl, setCurrentUrl] = useState<string>();
  const [visible, setVisible] = useState(false);
  const webViewRef = useRef<WebView>(null);

  const openModal = (url: string) => {
    setCurrentUrl(url);
    setVisible(true);
  };

  return (
    <>
      <FlatList
        data={posts?.slice(0, 15)}
        renderItem={(post: Record<string, any>) => <PostItem title={post?.item?.title} url={post?.item?.link} openModal={openModal} />}
        keyExtractor={(item, index) => `${item?.accepted_answer_id}-${index}`}
        ItemSeparatorComponent={() => <View style={[styles.separator, { borderBottomColor: StkColors().lightgray }]} />}
      />
      <Modal visible={visible}>
        <SafeAreaView style={styles.modalContent}>
          <View style={styles.closeWrapper}>
            <CloseButton onClose={() => setVisible(false)} />
          </View>
          <WebView startInLoadingState={true} ref={webViewRef} source={{ uri: currentUrl ?? 'https://google.com' }} renderLoading={() => <Spinner />} />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
  },
  closeWrapper: {
    padding: 12,
  },
});
