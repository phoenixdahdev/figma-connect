import type { IconProps } from './types'

/** Figma: `Icon / Queue` (node 12:128) */
export function Queue({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_Queue)">
      <path d="M4 10H16V12H4V10ZM4 6H16V8H4V6ZM4 14H12V16H4V14ZM14 14V20L19 17L14 14Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_Queue">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
