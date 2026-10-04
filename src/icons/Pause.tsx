import type { IconProps } from './types'

/** Figma: `Icon / Pause` (node 12:286) */
export function Pause({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_Pause)">
      <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_Pause">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
