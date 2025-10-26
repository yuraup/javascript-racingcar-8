import Car from './domain/Car.js';
import Round from './domain/Round.js';

import {
  scanCarNames,
  scanTryCount,
  printLine,
  printEmptyLine,
} from './utils/io.js';
import { parseCarNames, parseTryCount } from './utils/parse.js';
import { getWinnerNames } from './utils/winner.js';
import { formatRoundResult, formatWinners, joinLines } from './utils/format.js';

class App {
  async run() {
    try {
      const { cars, tryCounts } = await this.prepareGame();
      this.runAllRounds(cars, tryCounts);
      this.printWinners(cars);
    } catch (error) {
      printLine(error.message);
      throw error;
    }
  }

  async prepareGame() {
    const carNamesInput = await scanCarNames();
    const tryCountInput = await scanTryCount();

    const carNames = parseCarNames(carNamesInput);
    const tryCounts = parseTryCount(tryCountInput);

    const cars = carNames.map((car) => new Car(car));
    return { cars, tryCounts };
  }

  printWinners(cars) {
    const winners = getWinnerNames(cars);
    printLine(formatWinners(winners));
  }

  runAllRounds(cars, parsedTryCounts, onRoundEnd = () => {}) {
    printLine('\n실행 결과');

    for (let i = 0; i < parsedTryCounts; i += 1) {
      const singleResult = this.runRound(cars);
      onRoundEnd(singleResult, i);
      printLine(singleResult);
      printEmptyLine();
    }
  }

  runRound(cars) {
    const round = new Round(cars);
    round.run();

    const singleRound = formatRoundResult(round.getCars());
    return joinLines(singleRound);
  }
}

export default App;
