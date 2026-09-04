# Tasks: Polish Contact and Booking UX

## Phase 1: Foundation & Utilities

- [x] 1.1 Add `mapsLocationUrl` pointing to Google Maps place in `src/app/constants/static.ts`
- [x] 1.2 Add `float.whatsapp_msg` translation key across all 7 languages in `src/app/contexts/LanguageContext.tsx`
- [x] 1.3 Create `src/app/utils/date.ts` with `formatDate`, `getDefaultBookingDates`, and `calculateCheckoutDate`

## Phase 2: Component Integration

- [x] 2.1 Update `src/app/components/Contact.tsx` to navigate location card to `STATIC_TEXTS.mapsLocationUrl` with `target="_blank"` and `rel="noopener noreferrer"`
- [x] 2.2 Update `src/app/components/FloatingBookButton.tsx` to use `t('float.whatsapp_msg')` and sanitize `STATIC_TEXTS.phone`
- [x] 2.3 Update `src/app/pages/Booking.tsx` to replace inline date methods with imports from `src/app/utils/date.ts`

## Phase 3: Verification

- [x] 3.1 Run `npm run test:i18n` to confirm 100% translation parity across 7 languages
- [x] 3.2 Run `npm run typecheck` to validate TypeScript compilation with zero errors
- [x] 3.3 Validate scenario compliance for all 3 capability specs
