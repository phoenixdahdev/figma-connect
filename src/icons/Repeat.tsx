import type { IconProps } from './types'

/** Figma: `Icon / Repeat` (node 11:40) */
export function Repeat({ size = 24, ...props }: IconProps) {
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
      <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.25 5.25673L18.7385 7.87501L14.25 10.4933V5.25673ZM15.75 7.86828V7.88173L15.7615 7.87501L15.75 7.86828Z" fill="currentColor"/>
      <path d="M9 17.4375L6.75 16.125L9 14.8125" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.74888 7.12501H16.5V8.62501H6.75118C5.95605 8.62766 5.19422 8.9447 4.63196 9.50696C4.06969 10.0692 3.75265 10.8311 3.75 11.6262V12.375H2.25V11.6239L2.25 11.6228C2.25356 10.431 2.72858 9.28903 3.5713 8.4463C4.41402 7.60358 5.55598 7.12857 6.74776 7.12501L6.74888 7.12501ZM9.75 13.5067V18.7433L5.26152 16.125L9.75 13.5067ZM8.23848 16.125L8.25 16.1317V16.1183L8.23848 16.125Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.75 11.625V12.3761L21.75 12.3772C21.7464 13.569 21.2714 14.711 20.4287 15.5537C19.586 16.3964 18.444 16.8714 17.2522 16.875L17.2511 16.875H7.5V15.375H17.2488C18.0439 15.3724 18.8058 15.0553 19.368 14.493C19.9303 13.9307 20.2474 13.1689 20.25 12.3737V11.625H21.75Z" fill="currentColor"/>
      </g>
      </g>
    </svg>
  )
}
