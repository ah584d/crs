import { apiRoutes } from '../config/apiRoutes';
import { fetchData } from './network';

// avraham fix type
export const getUserInfo = async (uid: string, params?: Record<string, string>): Promise<any | null> => {
  // uid = '1264804';
  const url = buildUrl(uid, params);
  const [result, error] = await fetchData(url);
  if (error) {
    // raise up error message
    return null;
  } else {
    return result;
  }
};

export const buildUrl = (uid: string, params?: Record<string, string>): string => `${apiRoutes.STK_OVERFLOW.PROFILE}/${uid}/questions?order=desc&sort=activity&site=stackoverflow`;
