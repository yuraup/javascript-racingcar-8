import { parseCarNames, parseTryCount } from '../src/utils/parse.js';

describe('parseCarNames()', () => {
  test.each(['pobi,javaji', 'pobi,,woni', 'pobi woni jun', ''])(
    '"%s" 입력 시 [ERROR] 처리',
    (input) => {
      expect(() => parseCarNames(input)).toThrow('[ERROR]');
    },
  );

  test('콤마로 구분된 자동차 이름을 배열로 파싱', () => {
    const result = parseCarNames('pobi,woni,jun');
    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  test('양쪽 공백을 trim한 후 이름만 반환', () => {
    const result = parseCarNames('  pobi ,   woni   , jun  ');
    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });
});

describe('parseTryCount()', () => {
  test.each([
    ['3', 3],
    ['   5   ', 5],
  ])('"%s" 입력 시 %d 숫자로 변환', (input, expected) => {
    expect(parseTryCount(input)).toBe(expected);
  });

  test.each(['0', '-1', 'abc'])('"%s" 입력 시 [ERROR] 처리', (input) => {
    expect(() => parseTryCount(input)).toThrow('[ERROR]');
  });
});
