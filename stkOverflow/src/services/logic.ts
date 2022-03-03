import { decode } from 'html-entities';
import { apiRoutes } from '../config/apiRoutes';
import { FILTERS_BUTTON_QUERY_PARAM } from '../config/const';
import { fetchData } from './network';

export const getUserInfo = async (uid: string, filters: boolean[]): Promise<Record<string, any> | null> => {
  const url = buildUrl(uid, filters);
  const [result, error] = await fetchData(url);
  if (error) {
    console.log('Error occured while fetching data', error);
    // raise up error message toast
    return null;
  } else {
    return result;
  }
};

export const buildUrl = (uid: string, filters: boolean[]): string => {
  const activeFilters = filters
    .map((activeFilter: boolean, index: number) => {
      if (activeFilter) {
        return `&sort=${FILTERS_BUTTON_QUERY_PARAM[index]}`;
      }
    })
    .join('');
  return `${apiRoutes.STK_OVERFLOW.PROFILE}/${uid}/questions?order=desc${activeFilters}&site=stackoverflow`;
};

export const getHtmlContent = (htmlEncocedContent: string): string => decode(htmlEncocedContent);

export const getBooleanArray = (size: number): boolean[] => Array.from({ length: size }).map(_ => false);
