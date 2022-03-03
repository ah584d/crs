import debounce from 'lodash/debounce';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DEBOUNCE_DELAY } from '../../config/const';
import { StkColors } from '../../config/stkColors';
import { getUserInfo } from '../../services/logic';
import { InputField } from '../common/InputField';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { PostsList } from '../postsList/PostsList';
import { UserSummary } from '../userSummary/UserSummary';
import en from '../../assets/locales/en.json';
import { GlobalStateContext } from '../../models/stkOverflow.types';
import { OwnerDto } from '../../models/dto/stkOverflow.dto';

export const RootScreen = (): ReactElement => {
  const [loading, setLoading] = useState(false);
  const { filters, userId, setUserId, posts, setPosts } = React.useContext(GlobalStateContext);
  const { owner: { display_name, reputation, profile_image, accept_rate } = {} as OwnerDto } = posts?.[0] ?? {};

  // Stop the invocation of the debounced function after component unmounting
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  const blackColor4HookOrder = StkColors().black;

  const fetchUserData = async (inputFieldValue: string): Promise<void> => {
    setUserId(inputFieldValue);
    if (!inputFieldValue || inputFieldValue.length === 0) {
      setPosts([]);
      return;
    }

    setLoading(true);
    const userInfos = await getUserInfo(inputFieldValue, filters);
    userInfos && setPosts(userInfos.items);
    setLoading(false);
  };

  // we use useMemo instead of useCallback to make sure we do not re-run debounce on each render
  // we improve twice performance here:
  // 1. no new ref to debouncedChangeHandler on each render
  // 2. no new exceution of debounce on each render
  const debouncedChangeHandler = useMemo(() => debounce(fetchUserData, DEBOUNCE_DELAY), [filters]);
  const isListAvailable = posts && posts.length > 0;
  const displayNoResult = (): boolean => !loading && !!(userId?.length > 0);

  return (
    <View style={[styles.container, { backgroundColor: StkColors().white }]}>
      <View style={styles.top}>
        <Header />
        <View style={styles.inputWrapper}>
          <InputField onTextChanged={debouncedChangeHandler} editable={!loading} />
        </View>
        <View style={styles.listWrapper}>
          {isListAvailable ? (
            <UserSummary name={display_name} reputation={reputation} acceptRate={accept_rate} avatar={profile_image} />
          ) : displayNoResult() ? (
            <Text style={[styles.noUserText, { color: blackColor4HookOrder }]}>{en.labels.noUser}</Text>
          ) : null}
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
    justifyContent: 'space-between',
  },
  top: {
    flex: 1,
  },
  inputWrapper: {
    paddingVertical: 32,
    paddingHorizontal: 32,
    flex: 0.13,
  },
  listWrapper: {
    flex: 0.87,
  },
  footerWrapper: {
    paddingBottom: 32,
  },
  noUserText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
