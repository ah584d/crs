import React, { ReactElement, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StkColors } from '../../config/StkColors';
import { getUserInfo } from '../../services/logic';
import { InputField } from '../common/InputField';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { PostsList } from '../postsList/PostsList';
import { UserSummary } from '../userSummary/UserSummary';

export const RootScreen = (): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<any>(); // avraham fix types
  const isListAvailable = posts && posts.length > 0;

  const { owner: { display_name, reputation, profile_image } = {} as any, score } = posts?.[0] ?? {}; // avraham fix type

  const fetchUserData = async (inputFiledValue: string): Promise<void> => {
    if (!inputFiledValue || inputFiledValue.length === 0) {
      setPosts([]);
      return;
    }
    console.log(`try to fetch data for user : ${inputFiledValue}`);
    setLoading(true);
    const userInfos = await getUserInfo(inputFiledValue);
    setPosts(userInfos?.items);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.headerWrapper}>
          <Header />
        </View>
        <View style={styles.inputWrapper}>
          <InputField onTextChanged={fetchUserData} editable={!loading} />
        </View>
        <View style={styles.listWrapper}>
          {isListAvailable ? <UserSummary name={display_name} reputation={reputation} score={score} avatar={profile_image} /> : null}
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
    backgroundColor: StkColors.white,
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
  },
  listWrapper: {
    borderWidth: 1,
    borderColor: 'orange',
    flex: 0.9,
  },
  footerWrapper: {
    paddingBottom: 32,
  },
});
