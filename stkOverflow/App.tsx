import React, { createContext, useEffect, useState } from 'react';
import { AppState, SafeAreaView } from 'react-native';
import { RootScreen } from './src/components/root/Root';
import { FILTERS_BUTTON_LABELS } from './src/config/const';
import { Theme } from './src/models/stkOverflow.types';
import { getBooleanArray } from './src/services/logic';

// I used context instead of real state management for time saving, but it worses in term of performance...
export const GlobalStateContext = createContext({
  theme: Theme.LIGHT,
  setTheme: (_: Theme) => {},
  filters: getBooleanArray(FILTERS_BUTTON_LABELS.length),
  setFilters: (_: boolean[]) => {},
  userId: '',
  setUserId: (_: string) => {},
  posts: [] as Record<string, unknown>[],
  setPosts: (_: []) => {},
});

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const [filters, setFilters] = useState(getBooleanArray(FILTERS_BUTTON_LABELS.length));
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState<Record<string, unknown>[]>([]);
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
