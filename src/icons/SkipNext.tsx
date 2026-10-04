import type { IconProps } from './types'

/** Figma: `Icon / SkipNext` (node 12:285) */
export function SkipNext({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_SkipNext)">
      <path d="M6 18L14.5 12L6 6V18ZM16 6V18H18V6H16Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_SkipNext">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
