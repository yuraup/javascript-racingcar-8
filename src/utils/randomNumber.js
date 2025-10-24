import { Random } from '@woowacourse/mission-utils';

export const generateRandomNumber = () => Random.pickNumberInRange(0, 9);

export const isOverFour = (number) => number >= 4;
