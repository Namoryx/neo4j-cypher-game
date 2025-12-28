import { describe, expect, it } from 'vitest';
import { toRows } from './normalize.js';

describe('toRows', () => {
  it('maps neo4j record format to plain rows', () => {
    const response = {
      records: [
        {
          keys: ['name', 'age'],
          _fields: ['Alice', 30],
        },
      ],
    };

    expect(toRows(response)).toEqual([{ name: 'Alice', age: 30 }]);
  });

  it('maps records when fields array is present', () => {
    const response = {
      data: {
        records: [
          {
            keys: ['title', 'released'],
            fields: ['Matrix', 1999],
          },
        ],
      },
    };

    expect(toRows(response)).toEqual([{ title: 'Matrix', released: 1999 }]);
  });

  it('reads http transactional response shape', () => {
    const response = {
      results: [
        {
          columns: ['name'],
          data: [
            {
              row: ['Bob'],
            },
          ],
        },
      ],
    };

    expect(toRows(response)).toEqual([{ name: 'Bob' }]);
  });
});
