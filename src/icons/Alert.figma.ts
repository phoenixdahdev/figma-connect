// url=https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component?node-id=278-365
// source=src/icons/Alert.tsx
// component=Alert
import figma from 'figma'

// `Icon / Alert` carries no component properties in Figma, so the snippet is
// static apart from the optional `size` prop the code component adds.
export default {
  example: figma.code`<Alert />`,
  imports: ['import { Alert } from "@phoenixdahdev/ui-components"'],
  id: 'icon-alert',
  metadata: { nestable: true },
}
