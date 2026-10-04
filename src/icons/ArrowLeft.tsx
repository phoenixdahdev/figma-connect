import type { IconProps } from './types'

/** Figma: `Icon / ArrowLeft` (node 12:245) */
export function ArrowLeft({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_ArrowLeft)">
      <path d="M20 11H7.82998L13.42 5.41L12 4L3.99998 12L12 20L13.41 18.59L7.82998 13H20V11Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_ArrowLeft">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
