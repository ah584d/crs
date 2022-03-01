import debounce from 'lodash/debounce';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DEBOUNCE_DELAY } from '../../config/const';
import { StkColors } from '../../config/stkColors';
import { getUserInfo } from '../../services/logic';
import { InputField } from '../common/InputField';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { PostsList } from '../postsList/PostsList';
import { UserSummary } from '../userSummary/UserSummary';

export const RootScreen = (): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<any>(); // avraham fix types

  // Stop the invocation of the debounced function after component unmounting
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  const isListAvailable = posts && posts.length > 0;

  const { owner: { display_name, reputation, profile_image, accept_rate } = {} as any } = posts?.[0] ?? {}; // avraham fix type

  const fetchUserData = async (inputFiledValue: string): Promise<void> => {
    if (!inputFiledValue || inputFiledValue.length === 0) {
      setPosts([]);
      return;
    }
    setLoading(true);
    const userInfos = await getUserInfo(inputFiledValue);
    setPosts(userInfos?.items);
    setLoading(false);
  };

  // we use useMemo instead of useCallback to make sure we do not re-run debounce on each render
  // we improve twice performance here:
  // 1. no new ref to debouncedChangeHandler on each render
  // 2. no new exceution of debounce on each render
  const debouncedChangeHandler = useMemo(() => debounce(fetchUserData, DEBOUNCE_DELAY), []);

  return (
    <View style={[styles.container, { backgroundColor: StkColors().white }]}>
      <View style={styles.top}>
        <View style={styles.headerWrapper}>
          <Header />
        </View>
        <View style={styles.inputWrapper}>
          <InputField onTextChanged={debouncedChangeHandler} editable={!loading} />
        </View>
        <View style={styles.listWrapper}>
          {isListAvailable ? <UserSummary name={display_name} reputation={reputation} acceptRate={accept_rate} avatar={profile_image} /> : null}
          <PostsList posts={posts} />
        </View>
      </View>
      {isListAvailable ? (
        <View style={styles.footerWrapper}>
          <Footer postNumber={posts?.length} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  top: {
    flex: 1,
  },
  headerWrapper: {
    borderWidth: 1,
    borderColor: 'red',
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    paddingVertical: 32,
    paddingHorizontal: 32,
    flex: 0.13,
  },
  listWrapper: {
    borderWidth: 1,
    borderColor: 'orange',
    flex: 0.87,
  },
  footerWrapper: {
    paddingBottom: 32,
  },
});
