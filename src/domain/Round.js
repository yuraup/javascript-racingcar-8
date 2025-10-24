import { generateRandomNumber, isOverFour } from '../utils/randomNumber.js';

export default class Round {
  constructor(cars) {
    this.cars = cars;
  }

  run() {
    this.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();

      if (isOverFour(randomNumber)) {
        car.move();
      }
    });
  }
}
