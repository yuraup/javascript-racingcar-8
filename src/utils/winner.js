export const getMaxPosition = (cars) =>
  Math.max(...cars.map((car) => car.getPosition()));

export const getWinnerNames = (cars) => {
  const maxPosition = getMaxPosition(cars);
  return cars
    .filter((car) => car.getPosition() === maxPosition)
    .map((car) => car.getName());
};
