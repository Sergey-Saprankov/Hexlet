// Реализуйте и экспортируйте по умолчанию функцию, которая находит точку посередине между двумя указанными точками.

// Примеры
// const point1 = { x: 0, y: 0 };
// const point2 = { x: 4, y: 4 };
// const point3 = getMidpoint(point1, point2);
// console.log(point3); // => { x: 2, y: 2 };

const getMidpoint = (point1, point2) => {
  const obj = {};
  obj.x = (point1.x + point2.x) / 2;
  obj.y =  (point1.y + point2.y) / 2;
  return obj;
};

console.log(getMidpoint({ x: 0, y: 0 }, { x: 4, y: 4 }));

export default getMidpoint;