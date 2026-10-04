// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=12-317
// source=src/icons/Close.tsx
// component=Close
import figma from 'figma'

// `Icon / Close` carries no component properties in Figma, so the snippet is
// static apart from the optional `size` prop the code component adds.
export default {
  example: figma.code`<Close />`,
  imports: ['import { Close } from "@phoenixdahdev/ui-components"'],
  id: 'icon-close',
  metadata: { nestable: true },
}
