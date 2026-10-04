import { Link } from '../Link/Link'
import * as Icons from '../icons'
import { ICON_NODES } from '../icons/figma.nodes'
import './demo.css'

const VARIANTS = ['default', 'icon', 'italic'] as const
const STATES = ['default', 'active', 'disabled'] as const

const iconEntries = (Object.keys(ICON_NODES) as (keyof typeof ICON_NODES)[]).map((name) => ({
  name,
  node: ICON_NODES[name],
  Component: Icons[name] as (p: { size?: number }) => React.JSX.Element,
}))

export function App() {
  return (
    <main className="demo">
      <header className="demo__header">
        <h1>UI Components</h1>
        <p>
          React implementation of the <code>ui-component</code> Figma library, mapped back to
          design via Code Connect.
        </p>
      </header>

      <section>
        <h2>Link</h2>
        <p className="demo__note">
          Figma component set <code>285:386</code> — <code>Type</code> × <code>State</code>, all
          nine variants.
        </p>
        <div className="demo__grid">
          {VARIANTS.map((variant) =>
            STATES.map((state) => (
              <figure key={`${variant}-${state}`} className="demo__cell">
                <Link variant={variant} state={state} href="#">
                  Link Description
                </Link>
                <figcaption>
                  Type={variant} · State={state}
                </figcaption>
              </figure>
            )),
          )}
        </div>
      </section>

      <section>
        <h2>Icons <span className="demo__count">{iconEntries.length}</span></h2>
        <p className="demo__note">Each maps to its own Figma component on the Icons page.</p>
        <div className="demo__icons">
          {iconEntries.map(({ name, node, Component }) => (
            <figure key={name} className="demo__icon">
              <Component size={24} />
              <figcaption>
                {name}
                <small>{node}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}
