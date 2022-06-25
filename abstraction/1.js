// Реализуйте и экспортируйте по умолчанию функцию, которая находит расстояние между двумя точками на плоскости:

// Примеры
// point1 = [0, 0];
// point2 = [3, 4];
// calculateDistance(point1, point2); // 5

const calculateDistance = (point1, point2) => {
  const x = point1[0] - point2[0];
  const y = point1[1] - point2[1];
  return Math.sqrt(x ** 2 + y ** 2);
}

export default calculateDistance;