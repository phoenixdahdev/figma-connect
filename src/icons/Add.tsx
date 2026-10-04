import type { IconProps } from './types'

/** Figma: `Icon / Add` (node 12:316) */
export function Add({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_Add)">
      <path d="M18.9999 13H12.9999V19H10.9999V13H4.99994V11H10.9999V5H12.9999V11H18.9999V13Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_Add">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
