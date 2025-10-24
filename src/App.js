import { Console } from '@woowacourse/mission-utils';
import Car from './domain/Car.js';
import Round from './domain/Round.js';
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
    this.runSingleRound(cars);
  }

  runSingleRound(cars) {
    Console.print('\n실행 결과');
    const round = new Round(cars);
    round.run();

    const result = round.formatResult().join('\n');
    Console.print(result);
  }
}

export default App;
