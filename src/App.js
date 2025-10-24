import Car from './domain/Car.js';
import { scanCarNames, scanTryCounts } from './utils/io.js';
import { parseCarNames, parseTryCounts } from './utils/parse.js';
import { validateTryCounts } from './utils/validate.js';

class App {
  async run() {
    const carNamesInput = await scanCarNames();
    const parsedCarNames = parseCarNames(carNamesInput);

    const tryCountsInput = await scanTryCounts();
    const parsedTryCounts = parseTryCounts(tryCountsInput);
    validateTryCounts(parsedTryCounts);

    const cars = parsedCarNames.map((car) => new Car(car));
  }
}

export default App;
