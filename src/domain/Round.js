import { generateRandomNumber, canMoveForward } from '../utils/randomNumber.js';

export default class Round {
  constructor(cars) {
    this.cars = cars;
  }

  run() {
    this.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();

      if (canMoveForward(randomNumber)) {
        car.move();
      }
    });
  }

  getCars() {
    return this.cars;
  }
}
