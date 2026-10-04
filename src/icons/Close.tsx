import type { IconProps } from './types'

/** Figma: `Icon / Close` (node 12:317) */
export function Close({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_Close)">
      <path d="M19 6.41L17.59 5L12 10.59L6.40997 5L4.99997 6.41L10.59 12L4.99997 17.59L6.40997 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_Close">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
