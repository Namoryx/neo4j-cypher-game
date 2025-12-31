
import { describe, it, expect } from 'vitest';
import { getMockData } from '../services/mockData.js';

describe('getMockData', () => {
  it('should match exact query', () => {
    const query = 'RETURN 1';
    const result = getMockData(query);
    expect(result).toBeDefined();
    expect(result.records[0]._fields[0]).toBe(1);
  });

  it('should match query with LIMIT added', () => {
    const query = 'RETURN 1 LIMIT 50';
    const result = getMockData(query);
    expect(result).toBeDefined();
    expect(result.records[0]._fields[0]).toBe(1);
  });

  it('should match complex query with LIMIT', () => {
    const query = 'MATCH (u:User) RETURN u LIMIT 50';
    const result = getMockData(query);
    expect(result).toBeDefined();
    expect(result.records[0].keys[0]).toBe('u');
  });

  it('should match query with extra spaces and LIMIT', () => {
      const query = '  MATCH (u:User)   RETURN u   LIMIT 20 ';
      const result = getMockData(query);
      expect(result).toBeDefined();
  });
});
