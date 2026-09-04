# Contact Location Navigation Specification

## Purpose

Defines user interaction and navigation behavior when interacting with the physical address card in the Contact section.

## Requirements

### Requirement: External Navigation to Google Maps

The contact location card MUST provide an actionable external link navigating directly to Google Maps for Casa da Cuncheira.

#### Scenario: User clicks contact location card
- GIVEN a user viewing the Contact section
- WHEN the user clicks or activates the location card
- THEN the system MUST open the canonical Google Maps location URL in a new browser tab
- AND the link MUST include `rel="noopener noreferrer"` for security
- AND the link MUST have an accessible label indicating it opens external directions.

#### Scenario: Keyboard accessibility
- GIVEN a keyboard-only user navigating the Contact section
- WHEN focusing the location card
- THEN the element MUST be focusable via Tab navigation
- AND activating with Enter or Space MUST trigger navigation to Google Maps.
