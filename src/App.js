import Car from './domain/Car.js';
import Round from './domain/Round.js';
import {
  scanCarNames,
  scanTryCounts,
  printLine,
  printEmptyLine,
} from './utils/io.js';
import { parseCarNames, parseTryCounts } from './utils/parse.js';
import { validateTryCounts } from './utils/validate.js';
import { getWinnerNames } from './utils/winner.js';
import { formatRoundResult, formatWinners, joinLines } from './utils/format.js';

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
    printLine(formatWinners(winners));
  }

  runSingleRound(cars) {
    const round = new Round(cars);
    round.run();

    const singleRound = formatRoundResult(round.getCars());
    return joinLines(singleRound);
  }

  runAllRounds(cars, parsedTryCounts, onRoundEnd = () => {}) {
    printLine('\n실행 결과');

    for (let i = 0; i < parsedTryCounts; i += 1) {
      const singleResult = this.runSingleRound(cars);
      onRoundEnd(singleResult, i);
      printLine(singleResult);
      printEmptyLine();
    }
  }
}

export default App;
