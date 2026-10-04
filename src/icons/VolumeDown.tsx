import type { IconProps } from './types'

/** Figma: `Icon / VolumeDown` (node 12:308) */
export function VolumeDown({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_VolumeDown)">
      <path d="M18.5 12C18.5 10.23 17.48 8.71 16 7.97V16.02C17.48 15.29 18.5 13.77 18.5 12ZM5.00003 9V15H9.00003L14 20V4L9.00003 9H5.00003Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_VolumeDown">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
