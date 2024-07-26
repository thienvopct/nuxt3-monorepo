import { describe, expect, test } from 'vitest';

describe('Test rule', () => {
  describe('test multiply', () => {

    test('adds 3 - 2 to equal 6', () => {
      expect(multiply(3, 2)).toBe(6)
    })
  });
});

function multiply(a: number, b: number) {
  return a * b
}
