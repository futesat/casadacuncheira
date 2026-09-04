# Localized Inquiry Specification

## Purpose

Defines WhatsApp pre-filled inquiry messaging behavior according to the visitor's selected language and centralized business contact details.

## Requirements

### Requirement: Localized WhatsApp Message Pre-fill

The floating inquiry action on the booking page MUST construct a WhatsApp deep link containing a pre-filled greeting and inquiry message localized to the current application language.

#### Scenario: Pre-filled message matches active language
- GIVEN the visitor has selected any supported language (es, gl, en, fr, de, it, pt)
- WHEN viewing the booking page and activating the floating WhatsApp button
- THEN the target URL MUST point to `https://wa.me/{phone}` where `{phone}` is sanitized from centralized configuration
- AND the `text` query parameter MUST contain the corresponding localized inquiry string for that language.

#### Scenario: Complete translation parity
- GIVEN the internationalization catalog
- WHEN running the automated i18n validator (`npm run test:i18n`)
- THEN `float.whatsapp_msg` MUST have non-empty definitions across all 7 supported languages
- AND no language key discrepancies MUST exist.
