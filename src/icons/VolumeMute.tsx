import type { IconProps } from './types'

/** Figma: `Icon / VolumeMute` (node 12:307) */
export function VolumeMute({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_VolumeMute)">
      <path d="M6.99998 9V15H11L16 20V4L11 9H6.99998Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_VolumeMute">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
