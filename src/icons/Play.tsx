import type { IconProps } from './types'

/** Figma: `Icon / Play` (node 12:288) */
export function Play({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_Play)">
      <path d="M7.99994 5V19L18.9999 12L7.99994 5Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_Play">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
