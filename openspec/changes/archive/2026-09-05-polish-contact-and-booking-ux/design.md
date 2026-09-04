# Design: Polish Contact and Booking UX

## Technical Approach

Implement the three capabilities across presentation, i18n context, and utility layers.
1. Make the Contact location card interactive using centralized URLs and standard external link security.
2. Localize WhatsApp inquiry text across 7 languages in `LanguageContext.tsx` and dynamically construct the deep link in `FloatingBookButton.tsx`.
3. Extract date domain logic from `Booking.tsx` into a pure, typed `src/app/utils/date.ts` module.

## Architecture Decisions

### Decision: Centralized External Maps URL
**Choice**: Add `mapsLocationUrl` to `src/app/constants/static.ts`.
**Alternatives considered**: Hardcoding Google Maps search URL directly in `Contact.tsx`.
**Rationale**: Keeps all physical business coordinates and contact endpoints in a single audited configuration object (`STATIC_TEXTS`).

### Decision: Localized WhatsApp Inquiry via LanguageContext
**Choice**: Register `float.whatsapp_msg` in `LanguageContext.tsx` with translations for all 7 languages.
**Alternatives considered**: Single default message or English fallback.
**Rationale**: Respects the site's multi-lingual guest base and satisfies strict parity checked by `npm run test:i18n`.

### Decision: Standalone Native Date Utilities Module
**Choice**: Create `src/app/utils/date.ts` using native Date arithmetic and explicit pad logic.
**Alternatives considered**: Importing heavier libraries or keeping functions inline in `Booking.tsx`.
**Rationale**: Decouples UI rendering from business logic, ensures testability, and avoids additional bundle bloat.

## Data Flow

```
STATIC_TEXTS ─────────► Contact.tsx (opens mapsLocationUrl with target="_blank")
LanguageContext ──────► FloatingBookButton.tsx (builds wa.me link with float.whatsapp_msg)
STATIC_TEXTS.phone ───┘
date.ts ──────────────► Booking.tsx (provides formatDate, default dates, offset calc)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/app/constants/static.ts` | Modify | Add `mapsLocationUrl` pointing to Google Maps place |
| `src/app/components/Contact.tsx` | Modify | Use `STATIC_TEXTS.mapsLocationUrl`, open in new tab with `noopener noreferrer` |
| `src/app/contexts/LanguageContext.tsx` | Modify | Add `float.whatsapp_msg` for es, gl, en, fr, de, it, pt |
| `src/app/components/FloatingBookButton.tsx` | Modify | Use `t('float.whatsapp_msg')` and sanitized `STATIC_TEXTS.phone` |
| `src/app/utils/date.ts` | Create | Export `formatDate`, `getDefaultBookingDates`, `calculateCheckoutDate` |
| `src/app/pages/Booking.tsx` | Modify | Replace local date math with imports from `src/app/utils/date.ts` |

## Interfaces / Contracts

```typescript
// src/app/utils/date.ts
export interface BookingDateRange {
  checkin: string;     // YYYY-MM-DD
  checkout: string;    // YYYY-MM-DD
  minCheckin: string;  // YYYY-MM-DD
}

export function formatDate(date: Date): string;
export function getDefaultBookingDates(baseDate?: Date): BookingDateRange;
export function calculateCheckoutDate(checkinDateStr: string, minStayDays?: number): string;
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Typecheck | Static types across all modified/new files | `npm run typecheck` |
| i18n Parity | 100% parity across 7 languages | `npm run test:i18n` |
| E2E / Unit | UI components & links | Automated build and verification |

## Migration / Rollout

No migration required. All changes are backward compatible.

## Open Questions

None.
