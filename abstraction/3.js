// Отрезок — еще один графический примитив. В коде описывается парой точек, одна из которых — начало отрезка, другая — конец. Обычный отрезок не имеет направления, поэтому вы сами вольны выбирать то, какую точку считать началом, а какую концом.

// В этом задании подразумевается, что вы уже понимаете принцип построения абстракции и способны самостоятельно принять решение о том, как она будет реализована. Напомню, что сделать это можно разными способами и нет одного правильного.

// segments.js
// Реализуйте и экспортируйте указанные ниже функции:

// makeSegment(). Принимает на вход две точки и возвращает отрезок.
// getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
// getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
// getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.
// Пример
// const beginPoint = makeDecartPoint(3, 2);
// const endPoint = makeDecartPoint(0, 0);
// segment = makeSegment(beginPoint, endPoint);
 
// getMidpointOfSegment(segment); // (1.5, 1)
// getBeginPoint(segment); // (3, 2)
// getEndPoint(segment); // (0, 0)

const makeDecartPoint = (x, y) => ({ x, y });

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint});
const segment = makeSegment(beginPoint, endPoint);
const getMidpointOfSegment = (segment) => {
  const obj = {};
  obj.x = (segment.beginPoint.x + segment.endPoint.x) / 2;
  obj.y = (segment.beginPoint.y + segment.endPoint.y) / 2;
  return obj;
};

const midPoint = getMidpointOfSegment(segment);
const getBeginPoint = segment => segment.beginPoint;
const getEndPoint = segment => segment.endPoint;

const getbegin = getBeginPoint(segment);
const getend = getEndPoint(segment);

console.log(midPoint);
console.log(segment);
console.log(getbegin);
console.log(getend);