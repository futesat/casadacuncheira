# Booking Date Utilities Specification

## Purpose

Defines pure date formatting, range computation, and validation rules for booking stays.

## Requirements

### Requirement: ISO Date String Formatting

The date utility MUST convert a `Date` object into a standardized `YYYY-MM-DD` string representation without timezone skew.

#### Scenario: Valid date formatting
- GIVEN a valid JavaScript `Date` instance (e.g. 2026-09-15)
- WHEN `formatDate(date)` is invoked
- THEN the returned string MUST be formatted exactly as `YYYY-MM-DD` with two-digit zero-padded month and day.

### Requirement: Checkout Offset and Order Integrity

The date calculation utility MUST ensure checkout occurs after check-in by a configurable minimum stay offset.

#### Scenario: Checkout automatically follows check-in
- GIVEN an initial check-in date string `YYYY-MM-DD`
- WHEN `calculateCheckoutDate(checkin, minStayDays)` is called with a stay duration (default 3 days)
- THEN the returned checkout date string MUST be exactly `minStayDays` calendar days after check-in.

#### Scenario: Default booking window generation
- GIVEN a reference date (or current date)
- WHEN `getDefaultBookingDates()` is evaluated
- THEN `minCheckin` MUST be tomorrow (`+1` day)
- AND `checkin` MUST be `+3` days from reference
- AND `checkout` MUST be `+10` days from reference.
