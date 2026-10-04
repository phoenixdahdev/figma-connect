// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=12-316
// source=src/icons/Add.tsx
// component=Add
import figma from 'figma'

// `Icon / Add` carries no component properties in Figma, so the snippet is
// static apart from the optional `size` prop the code component adds.
export default {
  example: figma.code`<Add />`,
  imports: ['import { Add } from "@phoenixdahdev/ui-components"'],
  id: 'icon-add',
  metadata: { nestable: true },
}
