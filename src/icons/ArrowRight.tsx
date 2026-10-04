import type { IconProps } from './types'

/** Figma: `Icon / ArrowRight` (node 12:249) */
export function ArrowRight({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip_ArrowRight)">
      <path d="M12 4L10.59 5.41L16.17 11H3.99998V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
      </g>
      <defs>
      <clipPath id="clip_ArrowRight">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}
