export const truncateString = (str: string, front: number, back: number) => {
  if (str.length <= front) return str;
  return str.slice(0, front) + "..." + str.slice(-back);
};
