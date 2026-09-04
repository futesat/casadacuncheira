export interface BookingDateRange {
  checkin: string;
  checkout: string;
  minCheckin: string;
}

/**
 * Formats a Date object into a YYYY-MM-DD string representation.
 */
export function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Calculates standard booking window offsets from a reference date.
 * - minCheckin: tomorrow (+1 day)
 * - checkin: +3 days from baseDate
 * - checkout: +10 days from baseDate
 */
export function getDefaultBookingDates(baseDate: Date = new Date()): BookingDateRange {
  const minDate = new Date(baseDate);
  minDate.setDate(baseDate.getDate() + 1);

  const checkinDate = new Date(baseDate);
  checkinDate.setDate(baseDate.getDate() + 3);

  const checkoutDate = new Date(baseDate);
  checkoutDate.setDate(baseDate.getDate() + 10);

  return {
    checkin: formatDate(checkinDate),
    checkout: formatDate(checkoutDate),
    minCheckin: formatDate(minDate),
  };
}

/**
 * Calculates a valid checkout date string given a checkin string (YYYY-MM-DD)
 * and a minimum stay in days (defaults to 3).
 */
export function calculateCheckoutDate(checkinStr: string, minStayDays: number = 3): string {
  const parts = checkinStr.split('-').map(Number);
  const nextDate = new Date(parts[0], parts[1] - 1, parts[2] + minStayDays);
  return formatDate(nextDate);
}
