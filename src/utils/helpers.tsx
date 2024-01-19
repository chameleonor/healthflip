export const sortArrayOfObjects = <T extends { [key: string]: any }>(
  data: T[],
  key: keyof T
): T[] => data.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
