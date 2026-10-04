import type { IconProps } from './types'

/** Figma: `Icon / SkipPrevious` (node 12:284) */
export function SkipPrevious({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_SkipPrevious)">
      <path d="M6 6H8V18H6V6ZM9.5 12L18 18V6L9.5 12Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_SkipPrevious">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
