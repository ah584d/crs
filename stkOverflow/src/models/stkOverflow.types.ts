import React from 'react';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
export type NetworkResponse = [Record<string, any> | null, unknown | null];
export type AdaptTheme = React.Dispatch<React.SetStateAction<Theme>>;
export type AdaptFilters = React.Dispatch<React.SetStateAction<boolean[]>>;
export type AdaptQuery = (_: any) => void; //React.Dispatch<React.SetStateAction<RunQuery | undefined>>;
export type RunQuery = (inputFieldValue: string, refresh?: boolean) => Promise<void>;
