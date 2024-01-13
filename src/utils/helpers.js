export const sortArrayOfObjects = (data, key) =>
  data.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
