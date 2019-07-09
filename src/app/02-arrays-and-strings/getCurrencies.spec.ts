import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should return an array of currencies', () => {
    const result = getCurrencies();
    const currencies = ['USD', 'AUD', 'EUR'];
    currencies.forEach(currency => {
      expect(result).toContain(currency);
    });
  });
});
