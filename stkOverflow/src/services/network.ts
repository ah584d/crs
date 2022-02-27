export const fetchData = async (url: string): Promise<[Record<string, any> | null, unknown | null]> => {
  console.log(`url: ${url}`);
  try {
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return [result.json(), null];
  } catch (error) {
    console.log(`Error occured while fetching user info`);
    return [null, error];
  }
};
