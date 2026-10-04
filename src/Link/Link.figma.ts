// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=285-386
// source=src/Link/Link.tsx
// component=Link
import figma from 'figma'

const instance = figma.selectedInstance

// Figma `Type` -> code `variant`. All three values are mapped; an unmapped
// value would silently render as undefined.
const variant = instance.getEnum('Type', {
  Default: 'default',
  Icon: 'icon',
  Italic: 'italic',
})

// Figma `State` -> code `state`.
const state = instance.getEnum('State', {
  Default: 'default',
  Active: 'active',
  Disabled: 'disabled',
})

// Type=Icon renders the glyph alone, so it takes no children. The other two
// types carry a label, which changes the shape of the snippet.
const example =
  variant === 'icon'
    ? figma.code`<Link variant="${variant}" state="${state}" href="#" />`
    : figma.code`<Link variant="${variant}" state="${state}" href="#">Link Description</Link>`

export default {
  example,
  imports: ['import { Link } from "@phoenixdahdev/ui-components"'],
  id: 'link',
  metadata: { nestable: true },
}
