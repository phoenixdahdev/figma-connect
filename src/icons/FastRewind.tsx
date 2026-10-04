import type { IconProps } from './types'

/** Figma: `Icon / FastRewind` (node 12:297) */
export function FastRewind({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_FastRewind)">
      <path d="M11 18V6L2.49998 12L11 18ZM11.5 12L20 18V6L11.5 12Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_FastRewind">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
