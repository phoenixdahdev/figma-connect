// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=285-252
// source=src/icons/Figma.tsx
// component=Figma
import figma from 'figma'

// `Icon / Figma` carries no component properties in Figma, so the snippet is
// static apart from the optional `size` prop the code component adds.
export default {
  example: figma.code`<Figma />`,
  imports: ['import { Figma } from "@phoenixdahdev/ui-components"'],
  id: 'icon-figma',
  metadata: { nestable: true },
}
