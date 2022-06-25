// Напишите тесты для корзины интернет-магазина. Интерфейс:

// makeCart() – создаёт новую пустую корзину (объект).
// addItem(good, count) – добавляет в корзину товары и их количество. Товар – это объект с двумя свойствами: name (имя) и price (стоимость).
// getItems() – возвращает список товаров в формате [{ good, count }, { good, count }, ...]
// getCost() – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учётом их количества.
// getCount() – возвращает количество товаров в корзине.
// const cart = makeCart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35
// cart.addItem({ name: 'house', price: 10 }, 1);
// cart.getItems().length; // 3
// cart.getCost(); // 45

const a  = {

}
const makeCart = getImpelementation();



test('getItems', () => {
  const cart = makeCart();
  cart.addItem({ name: 'car', price: 3 }, 5);
  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getItems()).toEqual([{ good: { name: 'car', price: 3 }, count: 5 }, { good: { name: 'house', price: 10 }, count: 2 }]);
});

test('getCost', () => {
  const cart = makeCart();
  cart.addItem({ name: 'car', price: 3 }, 5);
  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getCost()).toEqual(35);
});

test('getCount', () => {
  cart.addItem({ name: 'car', price: 3 }, 5);
  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getCount()).toEqual(7);
});