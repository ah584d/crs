import React, { createContext, useEffect, useState } from 'react';
import { AppState, SafeAreaView } from 'react-native';
import { RootScreen } from './src/components/root/Root';

export const ThemeContext = createContext({ theme: 'light', setTheme: ((_: string) => {}) as React.Dispatch<React.SetStateAction<string>> });

const App = () => {
  const [theme, setTheme] = useState('light');
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
