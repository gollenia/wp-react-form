# `__experimentalForm`

Interne Formular-Bibliothek fuer wiederverwendbare Frontend-Eingaben.

## Ziele

- Stabile, kleine API fuer Formulare im Plugin
- Keine Abhaengigkeiten auf andere `src/shared/*`-Module ausserhalb dieses Ordners
- Wiederverwendbare Feld- und Layout-Primitives fuer Frontend-Flows

## Wichtige Grenzen

- Dieses Modul soll spaeter separat paketierbar sein.
- Deshalb darf `__experimentalForm` keine Imports nach draussen haben.
- Booking, Admin oder andere Features duerfen `__experimentalForm` konsumieren, aber nicht umgekehrt.

## Architektur

### `Form`

- Verwaltet Laden, Submit, Response-State und Formularwerte
- Rendert sichtbare Felder ueber `Fieldset`

### `Fieldset`

- Verantwortlich fuer Grid-Layout und Visibility-Handling
- Rendert Width-Spans ueber Wrapper-Elemente
- Feldkomponenten selbst kennen kein Grid-Layout mehr

### `FormField`

- Dispatcher fuer Feldtypen
- Mappt `FormFieldDefinition` auf konkrete Komponenten in `Fields/*`
- Bleibt die oeffentliche schema-getriebene API, auch wenn Low-Level-Primitives intern spaeter auf externe Libraries aufbauen sollten

## Verfuegbare Primitives

- `Button`: generische Button-Komponente
- `Checkbox`: wiederverwendbare Checkbox/Toggle-Komponente
- `Flex`: kleines Layout-Primitive mit getypten Props fuer `direction`, `align`, `justify`, `wrap`, `gap`
- `Stepper`: Plus/Minus-Eingabe fuer Mengen oder Zaehler
- `FormField`: Feld-Dispatcher
- `Fieldset`: sichtbare Feldliste mit Grid-Layout

Legacy-Aliase:

- `InputField` bleibt Alias fuer `FormField`
- `FormFields` bleibt Alias fuer `Fieldset`

## Architektur-Regel

- Die oeffentliche API dieses Pakets besteht aus den eigenen Form-Primitives und Schema-Komponenten.
- Externe UI-Libraries koennen intern als Fundament dienen, sollen aber nicht als parallele Public API dieses Pakets gedacht sein.
- Wenn ein einzelnes Feld ausserhalb eines JSON-Schemas gerendert werden soll, soll dafuer bevorzugt ein Primitive aus diesem Paket verwendet werden, damit Verhalten und Styling konsistent bleiben.

## Feldtypen

- `Input`: natives Text-/Email-/URL-/Date-/Number-Input
- `TextArea`: mehrzeiliges Textfeld
- `Select`: nativer Select
- `Radio`: Radio-Gruppe
- `Checkbox`: Checkbox oder Toggle
- `Combobox`: filterbare Text-Eingabe mit Vorschlagsliste
- `Country`: Country-Wrapper auf Basis der Combobox
- `Range`: Slider-artige Eingabe fuer `range` und den alten Alias `numberpicker`
- `Hidden`: Hidden Input
- `Submit`: Submit-Button-Feld
- `HtmlBlock`: sanitisiertes HTML

## Benennung

- `number` meint hier das native Zahlenfeld ueber `Input type="number"`.
- Das fruehere `Fields/Number.tsx` war semantisch ein Slider und heisst jetzt `Fields/Range.tsx`.
- `numberpicker` ist aktuell noch ein Legacy-Alias und sollte langfristig entfernt oder klar migriert werden.

## Combobox

Die Combobox ist intern auf Base UI aufgebaut, behaelt aber die lokale Public API.

Aktueller Stand:

- Base UI uebernimmt Popup, ARIA, Highlighting und Auswahlmechanik
- lokale Filterlogik bleibt erhalten, inklusive Prefix-Suche mit `*`
- Clear-Option bleibt als auswählbarer Eintrag integriert
- low-level `renderOption(option, state)` Callback fuer angepasste Eintragsdarstellung

Wichtig:

- `renderOption` ist absichtlich nur auf der Low-Level-Combobox, nicht auf `FormFieldDefinition`
- das Form-Schema soll nicht mit Renderfunktionen aufgeblasen werden

## Styling

- Basisstyles liegen in `style.scss`
- Form-Layout basiert auf `.ctx-form-fields`
- Stepper- und Feld-Styles sind ueber CSS-Variablen anpassbar

## Export-Regel

Neue generische Primitives, die fuer Formulare noetig sind, sollten bevorzugt hier landen und ueber `index.ts` exportiert werden.

Nicht hier hinein gehoert:

- Booking-spezifisches Markup
- Admin-spezifische UI
- Komponenten, die andere `shared`-Pakete von ausserhalb benoetigen
