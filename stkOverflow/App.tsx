import React, { createContext, useEffect, useState } from 'react';
import { AppState, SafeAreaView, StyleSheet } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StkOverflowStackScreen } from './src/components/navigation/navigationStack';
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
        {/* <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
          <StkOverflowStackScreen />
        </NavigationContainer> */}
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
