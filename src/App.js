import { Console } from '@woowacourse/mission-utils';
import Car from './domain/Car.js';
import Round from './domain/Round.js';
import { scanCarNames, scanTryCounts } from './utils/io.js';
import { parseCarNames, parseTryCounts } from './utils/parse.js';
import { validateTryCounts } from './utils/validate.js';
import { getWinnerNames } from './utils/winner.js';
import { formatWinners } from './utils/format.js';

class App {
  async run() {
    const carNamesInput = await scanCarNames();
    const parsedCarNames = parseCarNames(carNamesInput);

    const tryCountsInput = await scanTryCounts();
    const parsedTryCounts = parseTryCounts(tryCountsInput);
    validateTryCounts(parsedTryCounts);

    const cars = parsedCarNames.map((car) => new Car(car));
    this.runAllRounds(cars, parsedTryCounts);

    const winners = getWinnerNames(cars);
    Console.print(formatWinners(winners));
  }

  runAllRounds(cars, parsedTryCounts, onRoundEnd = () => {}) {
    Console.print('\n실행 결과');

    for (let i = 0; i < parsedTryCounts; i += 1) {
      const signleResult = this.runSingleRound(cars);
      onRoundEnd(signleResult, i);
      Console.print(signleResult);
      Console.print('');
    }
  }

  runSingleRound(cars) {
    const round = new Round(cars);
    round.run();

    return round.formatResult().join('\n');
  }
}

export default App;
