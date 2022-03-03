import React, { useEffect, useState } from 'react';
import { AppState, SafeAreaView } from 'react-native';
import { RootScreen } from './src/components/root/Root';
import { FILTERS_BUTTON_LABELS } from './src/config/const';
import { PostDto } from './src/models/dto/stkOverflow.dto';
import { GlobalStateContext, Theme } from './src/models/stkOverflow.types';
import { getBooleanArray } from './src/services/logic';

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const [filters, setFilters] = useState(getBooleanArray(FILTERS_BUTTON_LABELS.length));
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState<PostDto[]>([]);
  const initContext = { theme, setTheme, filters, setFilters, userId, setUserId, posts, setPosts };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', () => {});
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <GlobalStateContext.Provider value={initContext}>
        <RootScreen />
      </GlobalStateContext.Provider>
    </SafeAreaView>
  );
};

export default App;
