import { describe, expect, it } from 'vitest';

import { formatDate } from '@/shared/lib/date/date';

describe('Date', () => {
  describe('positive', () => {
    it('YYYY-MM-DD', () => {
      expect(formatDate('2024-12-30')).toBe('30 дек. 2024 г.');
    });

    it('YYYY-MM-DDTHH:mm:ss', () => {
      expect(formatDate('2023-12-01T15:30:00')).toBe('1 дек. 2023 г.');
    });

    it('YYYY-MM-DDTHH:mm:ssZ', () => {
      expect(formatDate('2023-12-01T15:30:00Z')).toBe('1 дек. 2023 г.');
    });

    it('12/01/2023', () => {
      expect(formatDate('12/01/2023')).toBe('1 дек. 2023 г.');
    });

    it('move to next month', () => {
      expect(formatDate('2023-02-30')).toBe('2 мар. 2023 г.');
    });
  });

  describe('negative', () => {
    it('invalid date', () => {
      expect(() => formatDate('invalid-date')).toThrow('Неверный формат даты');
    });

    it('empty date', () => {
      expect(() => formatDate('')).toThrow('Неверный формат даты');
    });

    it('30th february', () => {
      expect(() => formatDate('2023-02-32')).toThrow('Неверный формат даты');
    });
  });
});
