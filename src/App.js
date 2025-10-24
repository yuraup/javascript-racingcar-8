import { scanCarNames, scanTryCounts } from './utils/io.js';
import { parseCarNames } from './utils/parse.js';

class App {
  async run() {
    const carNamesInput = await scanCarNames();
    const parsedCarNames = parseCarNames(carNamesInput);

    const tryCountsInput = await scanTryCounts();
  }
}

export default App;
