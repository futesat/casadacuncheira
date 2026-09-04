# Proposal: Polish Contact and Booking UX

## Intent

Enhance conversion and guest experience across contact and booking touchpoints by fixing inactive UI actions, localizing mobile inquiries, and decoupling date domain logic from React components.

## Scope

### In Scope
- Make Contact section location card open an external Google Maps link with accessible attributes.
- Localize pre-filled WhatsApp inquiry message across all 7 supported languages and bind phone number to centralized constants.
- Extract date formatting, range calculation, and validation logic from `Booking.tsx` into a dedicated `date.ts` utility module.

### Out of Scope
- Redesigning the Contact section or Booking page layout.
- Adding new booking engines or modifying AvaiBook iframe integrations.

## Capabilities

### New Capabilities
- `booking-date-utilities`: Reusable utility functions for booking date formatting, default check-in/out range computation, and date math validation.
- `localized-inquiry`: Multi-language pre-filled WhatsApp inquiry generation using centralized contact settings.
- `contact-location-navigation`: External navigation to Google Maps from the contact location card with security and accessibility attributes.

### Modified Capabilities
None

## Approach

1. Centralize the canonical Google Maps location URL in `src/app/constants/static.ts` and update `Contact.tsx` to handle external links cleanly (`target="_blank"`, `rel="noopener noreferrer"`).
2. Add `float.whatsapp_msg` to `LanguageContext.tsx` with full 7-language parity, and update `FloatingBookButton.tsx` to use the localized translation and `STATIC_TEXTS.phone`.
3. Create `src/app/utils/date.ts` exporting `formatDate`, `getDefaultBookingDates`, and `calculateCheckoutDate`, then refactor `Booking.tsx` to consume them.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/app/constants/static.ts` | Modified | Add `mapsLocationUrl` constant |
| `src/app/components/Contact.tsx` | Modified | Connect location card to maps URL with external target |
| `src/app/contexts/LanguageContext.tsx` | Modified | Add `float.whatsapp_msg` across 7 languages |
| `src/app/components/FloatingBookButton.tsx` | Modified | Use localized WhatsApp message and central phone |
| `src/app/utils/date.ts` | New | Reusable date formatting and calculation functions |
| `src/app/pages/Booking.tsx` | Modified | Import and use extracted date utilities |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Missing translation keys break i18n validator | Low | Run `npm run test:i18n` to verify 100% parity across 7 languages |
| Timezone offset shifts in date calculations | Low | Use UTC/local calendar day calculations in `date.ts` without timezone shifting |

## Rollback Plan

Revert git changes with `git checkout -- src/` and delete `src/app/utils/date.ts` and the change directory.

## Dependencies

- None (uses existing React, date native methods, and TypeScript).

## Success Criteria

- [ ] Contact location card opens Google Maps in a new tab with `noopener noreferrer`.
- [ ] WhatsApp floating button uses current language message across all 7 languages.
- [ ] `npm run test:i18n` passes with 100% parity.
- [ ] Date utility functions in `src/app/utils/date.ts` are pure, typed, and consumed by `Booking.tsx`.
- [ ] `npm run typecheck` passes with zero errors.
