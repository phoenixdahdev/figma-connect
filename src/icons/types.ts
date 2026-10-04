import type { SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /** Rendered edge length in px. The Figma components are drawn on a 24x24 grid. */
  size?: number | string
}
