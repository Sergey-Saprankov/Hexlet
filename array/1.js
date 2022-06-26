// Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.

export const swap = (arr) => {
  if (arr.length < 2) return arr;
  const temp = arr[0];
  arr[0] = arr.at(-1);
  arr[arr.length - 1] = temp;
  return arr;
};