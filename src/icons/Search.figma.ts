// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=9-49
// source=src/icons/Search.tsx
// component=Search
import figma from 'figma'

// `Icon / Search` carries no component properties in Figma, so the snippet is
// static apart from the optional `size` prop the code component adds.
export default {
  example: figma.code`<Search />`,
  imports: ['import { Search } from "@phoenixdahdev/ui-components"'],
  id: 'icon-search',
  metadata: { nestable: true },
}
