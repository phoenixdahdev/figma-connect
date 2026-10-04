import type { IconProps } from './types'

/** Figma: `Icon / Playing` (node 12:184) */
export function Playing({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
      <g>
      <path d="M16.875 7.5H20.625V16.5H16.875V7.5Z" fill="currentColor"/>
      <path d="M10.125 3H13.875V21H10.125V3Z" fill="currentColor"/>
      <path d="M3.375 7.5H7.125V16.5H3.375V7.5Z" fill="currentColor"/>
      </g>
      </g>
    </svg>
  )
}
