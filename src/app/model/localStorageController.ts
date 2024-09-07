export const getFromLocalStore = (key: string) => {
  const jsonData: string | null = localStorage.getItem(key);
  const data = jsonData ? JSON.parse(jsonData) : null;
  return data;
};
