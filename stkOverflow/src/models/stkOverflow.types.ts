import { createContext } from 'react';
import { FILTERS_BUTTON_LABELS } from '../config/const';
import { getBooleanArray } from '../services/logic';
import { PostDto } from './dto/stkOverflow.dto';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type NetworkResponse<T> = [T | null, unknown | null];

export interface GlobalContextType {
  theme: Theme;
  setTheme: (_: Theme) => void;
  filters: boolean[];
  setFilters: (_: boolean[]) => void;
  userId: string;
  setUserId: (_: string) => void;
  posts: PostDto[];
  setPosts: (_: PostDto[]) => void;
}

// I used context instead of real state management for time saving, but it worses in term of performance...
export const GlobalStateContext = createContext<GlobalContextType>({
  theme: Theme.LIGHT,
  setTheme: (_: Theme) => {},
  filters: getBooleanArray(FILTERS_BUTTON_LABELS.length),
  setFilters: (_: boolean[]) => {},
  userId: '',
  setUserId: (_: string) => {},
  posts: [] as PostDto[],
  setPosts: (_: PostDto[]) => {},
});
