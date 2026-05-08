# `RadioCards`

Card-style radio group for exclusive selection.

## Use when

- every option should stay visible
- options need more context than a single label
- one value must be chosen from a small set

## Important props

- `options`
- `value`
- `onChange`
- `label`
- `required`
- `error`

## Notes

- Options use `{ value, title, description, icon, note, disabled }`.
- The component renders native radio inputs and styles the labels as cards.
- For simple text-only choices, prefer `Radio`.
