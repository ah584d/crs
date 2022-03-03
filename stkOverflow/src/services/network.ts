import { NetworkResponse } from '../models/stkOverflow.types';

export const fetchData = async <T>(url: string): Promise<NetworkResponse<T>> => {
  console.log(`url: ${url}`);
  try {
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return [result?.json() as any as T, null];
  } catch (error) {
    console.log(`Error occured while fetching user info`);
    return [null, error];
  }
};
