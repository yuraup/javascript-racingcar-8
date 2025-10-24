export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}
