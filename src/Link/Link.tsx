import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Figma } from '../icons/Figma'
import './Link.css'

/** Mirrors the Figma `Type` variant property on the Link component set. */
export type LinkVariant = 'default' | 'icon' | 'italic'

/** Mirrors the Figma `State` variant property on the Link component set. */
export type LinkState = 'default' | 'active' | 'disabled'

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Figma: Type. `icon` renders the glyph alone; `italic` slants the label. */
  variant?: LinkVariant
  /** Figma: State. `disabled` also blocks pointer events and drops the href. */
  state?: LinkState
  /** Leading glyph. Defaults to the Figma mark used in the design. */
  icon?: ReactNode
  /** Label text. Ignored when `variant` is `icon`. */
  children?: ReactNode
}

export function Link({
  variant = 'default',
  state = 'default',
  icon = <Figma />,
  children,
  href,
  className,
  ...rest
}: LinkProps) {
  const isDisabled = state === 'disabled'

  return (
    <a
      {...rest}
      href={isDisabled ? undefined : href}
      aria-disabled={isDisabled || undefined}
      tabIndex={isDisabled ? -1 : rest.tabIndex}
      data-variant={variant}
      data-state={state}
      className={className ? `uic-link ${className}` : 'uic-link'}
    >
      <span className="uic-link__icon" aria-hidden="true">
        {icon}
      </span>
      {variant !== 'icon' && <span className="uic-link__label">{children}</span>}
    </a>
  )
}
