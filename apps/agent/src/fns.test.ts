import { describe, expect, test } from 'vitest';

import { range } from './fns';

describe(`fns test`, () => {
  test(`range fn`, () => {
    const r = range();
    expect(r).toMatchObject([0, 10]);
  })
})