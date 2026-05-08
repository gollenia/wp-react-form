# `Input`

Wrapper for native `<input>` types such as `text`, `email`, `url`, `date`, and `number`.

## Use when

- a native browser input is sufficient
- you need pattern, min/max, or autocomplete behavior

## Important props

- `type`
- `name`
- `label`
- `value`
- `onChange`
- `required`
- `min` / `max`
- `pattern`
- `autoComplete`
- `unit`
- `error`

## Notes

- `number` here means the real native number input.
- `unit` renders a visual suffix inside the input and is not part of the value.
- Field layout does not come from this component, but from `FormFields`.
- For sliders, do not use `Input type="number"`; use `Range` instead.
