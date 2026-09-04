import { test, expect } from '@playwright/test';
import { formatDate, getDefaultBookingDates, calculateCheckoutDate } from '../../src/app/utils/date';

test.describe('Booking Date Utilities', () => {
  test('formatDate formats Date into YYYY-MM-DD correctly', () => {
    const d = new Date(2026, 8, 15); // Sept 15, 2026
    expect(formatDate(d)).toBe('2026-09-15');

    const singleDigit = new Date(2026, 0, 5); // Jan 5, 2026
    expect(formatDate(singleDigit)).toBe('2026-01-05');
  });

  test('getDefaultBookingDates computes +1, +3, +10 days offsets from reference date', () => {
    const base = new Date(2026, 8, 1); // Sept 1, 2026
    const range = getDefaultBookingDates(base);

    expect(range.minCheckin).toBe('2026-09-02');
    expect(range.checkin).toBe('2026-09-04');
    expect(range.checkout).toBe('2026-09-11');
  });

  test('calculateCheckoutDate calculates valid stay offsets across month boundaries', () => {
    expect(calculateCheckoutDate('2026-09-04', 3)).toBe('2026-09-07');
    expect(calculateCheckoutDate('2026-09-29', 3)).toBe('2026-10-02');
  });
});
