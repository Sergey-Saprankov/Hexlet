// В проекте имеются три функции по работе с массивами: get(), indexOf() и slice(). Программист, работавший на этом проекте до вас, недостаточно ответственно отнесся к написанию тестов. Вам нужно исправить этот недочет и дописать недостающие тесты.

// Выполните в терминале команду make test-coverage и сгенерируйте отчет по покрытию кода тестами.
// Изучите статистику и допишите тесты на те функции, которые не достаточно покрыты тестами.
// tests/functions.test.js
// Допишите необходимые тесты на функции get(), indexOf() и slice(). Функции работают следующим образом:

// Функция get(coll, index, defaultValue = null) извлекает из массива значение по указанному индексу, если индекс существует. Если индекс не существует, возвращает значение по умолчанию.

// Пример работы функции:

// const numbers = [1, 2, 3, 4];
// get(numbers, 1) // 2
// get(numbers, 5, 'nothing') // 'nothing'
// get(numbers, 5) // null
// Функция indexOf(coll, value, fromIndex) возвращает первый индекс, по которому переданное значение может быть найдено в массиве или -1, если такого значения нет. Аргументы:

// coll - массив, в котором ведется поиск.
// value - значение, поиск которого ведется в массиве .
// fromIndex - индекс, с которого начинается поиск элемента, по умолчанию равен нулю. Если значение fromIndex отрицательное, то оно используется, как смещение с конца массива.
// Пример работы функции:

// const numbers = [1, 2, 3, 2, 5];
// indexOf(numbers, 2) // 1
// indexOf(numbers, 7) // -1
// indexOf(numbers, 2, -3) // 3
// indexOf(numbers, 2, -10) // 1
// Функция slice(coll, begin, end) возвращает новый массив, содержащий копию части исходного массива. Аргументы:

// coll - исходный массив.
// begin - индекс, по которому начинается извлечение. Если индекс отрицательный, begin указывает смещение от конца последовательности. По умолчанию равен нулю.
// end - индекс, по которому заканчивается извлечение (не включая элемент с индексом end). Если индекс отрицательный, end указывает смещение от конца последовательности. По умолчанию равен длине исходного массива.
// Пример работы функции:

// const numbers = [1, 2, 3, 4, 5];
// slice(numbers); // [1, 2, 3, 4, 5]
// slice(numbers, 1, 4); // [2, 3, 4]
// slice(numbers, -4, -2) // [2, 3]
// slice(numbers, 7); // []
// slice(numbers, -8, 8); // [1, 2, 3, 4, 5]

// @ts-check





test('testing function get()', () => {
  const actual1 = get([1, 2, 3], 1, 'a');
  expect(actual1).toBe(2);

  const actual2 = get([1, 2, 3], 4, 'a');
  expect(actual2).toBe('a');

  const actual3 = get([1, 2, 3], 4);
  expect(actual3).toBeNull();

  // BEGIN (write your solution here)
 
  // END
});

test('testing function slice()', () => {
  const actual1 = slice([1, 2, 3, 4, 5, 6], 1, 4);
  expect(actual1).toEqual([2, 3, 4]);

  // BEGIN (write your solution here)
  const actual2 = slice([]);
  expect(actual2).toEqual([]);

  const actual3 = slice([1, 2, 3, 4, 5, 6], -5);
  expect(actual3).toEqual([2, 3, 4, 5, 6]);

  const actual4 = slice([1, 2, 3, 4, 5, 6], -4, -1);
  expect(actual4).toEqual([3, 4, 5]);

  const actual5 = slice([1, 2, 3, 4, 5, 6], 1, -2);
  expect(actual5).toEqual([2, 3, 4]);

  const actual6 = slice([1, 2, 3, 4, 5, 6], -10, 10);
  expect(actual6).toEqual([1, 2, 3, 4, 5, 6]);

  const actual7 = slice([1, 2, 3, 4, 5, 6], -10, 4);
  expect(actual7).toEqual([1, 2, 3, 4]);

  const actual8 = slice([1, 2, 3, 4, 5, 6]);
  expect(actual8).toEqual([1, 2, 3, 4, 5, 6]);

  const actual9 = slice([1, 2], -2, -1);
  expect(actual9).toEqual([1]);

  const actual10 = slice([1, 2, 3, 4, 5, 6], -6, -1);
  expect(actual10).toEqual([1, 2, 3, 4, 5]);

  const actual11 = slice([1, 2, 3, 4, 5, 6], -1, -1);
  expect(actual11).toEqual([]);
  // END
});

test('testing function indexOf()', () => {
  const actual1 = indexOf([2, 7, 3, 2, 4], 2);
  expect(actual1).toBe(0);
  // BEGIN (write your solution here)
  const actual2 = indexOf([2, 7, 3, 2, 4], 2, 1);
  expect(actual2).toBe(3);

  const actual3 = indexOf([], 2, 1);
  expect(actual3).toBe(-1);

  const actual4 = indexOf([2, 7, 3, 2, 4], 10, 1);
  expect(actual4).toBe(-1);

  const actual5 = indexOf([2, 7, 3, 2, 4], 2, -10);
  expect(actual5).toBe(0);

  const actual6 = indexOf([2, 7, 3, 2, 4], 10, -10);
  expect(actual6).toBe(-1);

  const actual7 = indexOf([2, 7, 3, 2, 4], 10, 10);
  expect(actual7).toBe(-1);

  const actual8 = indexOf([2, 7, 3, 2, 4], 4, -1);
  expect(actual8).toBe(4);

  const actual9 = indexOf([2, 7, 3, 2, 4], 2, -1);
  expect(actual9).toBe(-1);
  // END
});


