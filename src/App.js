import { scanCarNames } from './utils/io.js';

class App {
  async run() {
    const carNamesInput = await scanCarNames();
  }
}

export default App;
