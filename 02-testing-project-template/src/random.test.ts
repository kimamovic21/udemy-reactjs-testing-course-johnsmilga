import { describe, test, expect } from 'vitest';

describe('basic arithmetic checks', () => {
  test('1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('2 * 2 equals 4', () => {
    expect(2 * 2).toBe(4);
  });
});
