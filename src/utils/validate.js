import { throwError } from '../errors.js';

export const validateTryCounts = (tryCountsInput) => {
  if (!Number.isInteger(tryCountsInput) || tryCountsInput < 1) {
    throwError('시도 횟수는 1 이상의 정수여야 합니다.');
  }
};
