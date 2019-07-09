import { greet } from './greet';

describe('greet', () => {
  it('if input is string should return "Welcome" concatenated with input', () => {
    const result = greet('Caleb');
    expect(result).toContain('Caleb');
  });
});
