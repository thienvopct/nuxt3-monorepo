import { describe, expect, test } from 'vitest';

describe('Test rule', () => {
  describe('test sum', () => {

    test('adds 3 - 2 to equal 1', () => {
      expect(minus(3, 2)).toBe(1)
    })
  });
});

function minus(a: number, b: number) {
  return a - b
}
