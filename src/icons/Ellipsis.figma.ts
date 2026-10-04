// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=11-31
// source=src/icons/Ellipsis.tsx
// component=Ellipsis
import figma from 'figma'

// `Icon / Ellipsis` carries no component properties in Figma, so the snippet is
// static apart from the optional `size` prop the code component adds.
export default {
  example: figma.code`<Ellipsis />`,
  imports: ['import { Ellipsis } from "@phoenixdahdev/ui-components"'],
  id: 'icon-ellipsis',
  metadata: { nestable: true },
}
