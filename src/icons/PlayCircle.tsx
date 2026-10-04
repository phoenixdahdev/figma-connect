import type { IconProps } from './types'

/** Figma: `Icon / PlayCircle` (node 12:287) */
export function PlayCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_PlayCircle)">
      <path d="M9.99994 16.5L15.9999 12L9.99994 7.5V16.5ZM11.9999 2C6.47994 2 1.99994 6.48 1.99994 12C1.99994 17.52 6.47994 22 11.9999 22C17.5199 22 21.9999 17.52 21.9999 12C21.9999 6.48 17.5199 2 11.9999 2ZM11.9999 20C7.58994 20 3.99994 16.41 3.99994 12C3.99994 7.59 7.58994 4 11.9999 4C16.4099 4 19.9999 7.59 19.9999 12C19.9999 16.41 16.4099 20 11.9999 20Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_PlayCircle">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
