import type { IconProps } from './types'

/** Figma: `Icon / FastForward` (node 12:293) */
export function FastForward({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_FastForward)">
      <path d="M3.99998 18L12.5 12L3.99998 6V18ZM13 6V18L21.5 12L13 6Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_FastForward">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
