import { Dimensions } from 'react-native';
import en from '../assets/locales/en.json';

export const DEBOUNCE_DELAY = 300;
export const MAX_RESULT_IN_LIST = 15;
export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

export const FILTERS_BUTTON_LABELS = [en.labels.date, en.labels.answers, en.labels.views];
// These criterias do not correspond to the homework requirement
export const FILTERS_BUTTON_QUERY_PARAM = ['activity', 'votes', 'creation'];
