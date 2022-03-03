import React, { ReactElement, useRef, useState } from 'react';
import { StyleSheet, FlatList, View, SafeAreaView, Modal } from 'react-native';
import WebView from 'react-native-webview';
import { MAX_RESULT_IN_LIST } from '../../config/const';
import { StkColors } from '../../config/stkColors';
import { PostDto } from '../../models/dto/stkOverflow.dto';
import { CloseButton } from '../common/CloseButton';
import { Spinner } from '../common/Spinner';
import { PostItem } from '../postItem/PostItem';

export interface PostsListProps {
  posts: PostDto[] | undefined;
}

export const PostsList = ({ posts }: PostsListProps): ReactElement => {
  const [currentUrl, setCurrentUrl] = useState<string>();
  const [visible, setVisible] = useState(false);
  const webViewRef = useRef<WebView>(null);

  const openModal = (url: string) => {
    setCurrentUrl(url);
    setVisible(true);
  };

  const separator = (): ReactElement => <View style={[styles.separator, { borderBottomColor: StkColors().lightgray }]} />;
  return (
    <>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem title={item?.title} score={item?.score} url={item?.link} openModal={openModal} />}
        keyExtractor={(item, index) => `${item?.last_activity_date}-${index}`}
        ItemSeparatorComponent={separator}
        ListFooterComponent={posts && posts.length > 0 ? separator : null}
      />
      <Modal visible={visible}>
        <SafeAreaView style={[styles.modalContent, { backgroundColor: StkColors().white }]}>
          <View style={styles.closeWrapper}>
            <CloseButton onClose={() => setVisible(false)} />
          </View>
          <WebView
            onShouldStartLoadWithRequest={() => true}
            startInLoadingState={true}
            ref={webViewRef}
            source={{ uri: currentUrl ?? 'https://google.com' }}
            renderLoading={() => <Spinner />}
          />
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
