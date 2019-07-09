import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if input is a negatvie number', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('should increment if input is a positive number', () => {
    const result = compute(0);
    expect(result).toBe(1);
  });
});
