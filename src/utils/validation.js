import { MIN_NAME_LENGTH, MAX_NAME_LENGTH } from '../constants/io.js';
import { throwError } from '../errors.js';

export function validateSeparator(carNamesInput) {
  const hasComma = /,/.test(carNamesInput);
  const hasOtherSeparators = /[ :;|]/.test(carNamesInput);
  if (!hasComma && hasOtherSeparators) {
    throwError('자동차 이름은 콤마(,)로 구분해야 합니다.');
  }
}

export function validateCarCount(carNamesArray) {
  if (carNamesArray.length === 0) throwError('최소 1대의 자동차가 필요합니다.');
}

export function validateNameLength(carNamesArray) {
  const hasEmptyName = carNamesArray.some((name) => name.length === 0);
  if (hasEmptyName) {
    throwError('자동차 이름은 1~5자의 유효한 문자열이어야 합니다.');
  }

  const hasInvalidLength = carNamesArray.some(
    (name) => name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH,
  );

  if (hasInvalidLength) {
    throwError('자동차 이름은 1~5자여야 합니다.');
  }
}

export function validateTryCountValue(tryCountInput) {
  const trimmed = tryCountInput.trim();

  if (!/^\d+$/.test(trimmed) || Number(trimmed) < 1) {
    throwError('시도 횟수는 1 이상의 정수여야 합니다.');
  }
  return trimmed;
}
