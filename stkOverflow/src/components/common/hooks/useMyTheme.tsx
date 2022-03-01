import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../../../../App';
import { Theme } from '../../../models/stkOverflow.types';

export const useMyTheme = (): boolean => {
  const { theme } = React.useContext(ThemeContext);
  const [updatedTheme, setUpdatedTheme] = useState<string>(Theme.LIGHT);

  useEffect(() => {
    setUpdatedTheme(theme);
  }, [theme]);

  return updatedTheme === 'dark';
};
