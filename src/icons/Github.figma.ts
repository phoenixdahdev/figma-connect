// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=384-620
// source=src/icons/Github.tsx
// component=Github
import figma from 'figma'

// `Icon / Github` carries no component properties in Figma, so the snippet is
// static apart from the optional `size` prop the code component adds.
export default {
  example: figma.code`<Github />`,
  imports: ['import { Github } from "@phoenixdahdev/ui-components"'],
  id: 'icon-github',
  metadata: { nestable: true },
}
