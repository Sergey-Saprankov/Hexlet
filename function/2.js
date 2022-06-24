// Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке. Количество символов передаётся в takeLast() вторым параметром. Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.

const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (text, count) => {
    if (text.length === 0 || text.length < count) return null;
    const result = text.split('').reverse().join('').slice(0, 4);
    return result;
  };
  // END

  return takeLast(text, 4);
};

export default run;
