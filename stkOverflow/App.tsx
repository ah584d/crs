import React, { createContext, useEffect, useState } from 'react';
import { AppState, SafeAreaView } from 'react-native';
import { RootScreen } from './src/components/root/Root';
import { Theme } from './src/models/stkOverflow.types';

export const ThemeContext = createContext({ theme: Theme.LIGHT, setTheme: ((_: string) => {}) as React.Dispatch<React.SetStateAction<Theme>> });

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const themeData = { theme, setTheme };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', () => {});
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <ThemeContext.Provider value={themeData}>
        <RootScreen />
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};

export default App;
