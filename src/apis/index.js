export const readTxt = async (url) => {
  const response = await fetch(url);
  return await response.text();
};
