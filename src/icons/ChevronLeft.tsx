import type { IconProps } from './types'

/** Figma: `Icon / ChevronLeft` (node 12:257) */
export function ChevronLeft({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_ChevronLeft)">
      <path d="M15.41 7.41L14 6L8.00002 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_ChevronLeft">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
