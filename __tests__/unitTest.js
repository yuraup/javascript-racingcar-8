import { getWinnerNames } from '../src/utils/winner';
import { canMoveForward } from '../src/utils/randomNumber.js';
import Car from '../src/domain/Car.js';

describe('전진 조건 검사', () => {
  test.each([
    [3, false],
    [4, true],
    [9, true],
  ])('입력값 %s일 때 %s를 반환한다', (input, expected) => {
    expect(canMoveForward(input)).toBe(expected);
  });
});

describe('우승자 계산', () => {
  test('가장 많이 이동한 자동차 반환', () => {
    // given
    const yura = new Car('yura');
    const pobi = new Car('pobi');
    const jun = new Car('jun');

    yura.position = 5;
    pobi.position = 3;
    jun.position = 2;

    // when
    const winners = getWinnerNames([yura, pobi, jun]);

    // then
    expect(winners).toEqual(['yura']);
  });

  test('공동 우승자가 있을 경우 모두 반환', () => {
    // given
    const pobi = new Car('pobi');
    const woni = new Car('woni');
    const jun = new Car('jun');

    pobi.position = 5;
    woni.position = 5;
    jun.position = 4;

    // when
    const winners = getWinnerNames([pobi, woni, jun]);

    // then
    expect(winners).toEqual(['pobi', 'woni']);
  });
});
