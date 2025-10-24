export const formatWinners = (names) => `최종 우승자 : ${names.join(',')}`;

export const formatRoundResult = (cars) =>
  cars.map((car) => `${car.getName()} : ${'-'.repeat(car.getPosition())}`);

export const joinLines = (lines) => lines.join('\n');
