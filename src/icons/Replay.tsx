import type { IconProps } from './types'

/** Figma: `Icon / Replay` (node 12:194) */
export function Replay({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
      <path d="M11.9844 5.07828V2.95312L6.98438 6.07828L11.9844 9.20343V7.07828C15.2944 7.07828 17.9844 9.76828 17.9844 13.0783C17.9844 16.3883 15.2944 19.0783 11.9844 19.0783C8.67438 19.0783 5.98438 16.3883 5.98438 13.0783H3.98438C3.98438 17.4983 7.56438 21.0783 11.9844 21.0783C16.4044 21.0783 19.9844 17.4983 19.9844 13.0783C19.9844 8.65828 16.4044 5.07828 11.9844 5.07828Z" fill="currentColor"/>
      </g>
    </svg>
  )
}
