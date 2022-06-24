// Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. Экспортируйте данную функцию по умолчанию.

const takeOldest = (arr, user = 1) => {
  const sortedData = _.sortBy(arr, (el) => {
    return Date.parse(el.birthday);
  });
  const result = [];
  for (let i = 0; i < user; i += 1) {
    result.push(sortedData[i]);
  }
  return result;
};
// END

export default takeOldest;