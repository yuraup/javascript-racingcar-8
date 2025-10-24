import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../constants/io.js';
import { throwError } from '../errors.js';

export const parseCarNames = (carNamesInput) => {
  const parsedCarNames = carNamesInput.split(',').map((name) => name.trim());
  const hasInvalid = parsedCarNames.some(
    (name) => name.length > MAX_NAME_LENGTH || name.length < MIN_NAME_LENGTH,
  );
  if (hasInvalid) {
    throwError('자동차 이름은 1~5자여야 합니다.');
  }

  return parsedCarNames;
};
