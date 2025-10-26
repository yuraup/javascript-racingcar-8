import {
  validateSeparator,
  validateCarCount,
  validateTryCountValue,
  validateNameLength,
} from './validation.js';

export const parseCarNames = (carNamesInput) => {
  validateSeparator(carNamesInput);
  const parsedCarNames = carNamesInput.split(',').map((name) => name.trim());
  validateCarCount(parsedCarNames);
  validateNameLength(parsedCarNames);

  return parsedCarNames;
};

export const parseTryCount = (tryCountInput) => {
  const trimmed = validateTryCountValue(tryCountInput);
  return Number(trimmed);
};
