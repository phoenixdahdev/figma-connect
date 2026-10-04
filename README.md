# UI Components — Figma Code Connect

React implementation of the **`ui-component`** Figma library, mapped back to design with
[Code Connect](https://developers.figma.com/docs/code-connect/).

- **Figma file:** [`ui-component`](https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component) (`NVKkAkrE6hyV35V75Z0ohi`)
- **Design credit:** the Figma library is the *UI Components* community kit by
  [@fabrizzio](https://figma.com/@fabrizzio) and [@edgarlr](https://figma.com/@edgarlr). The React
  code here is an original implementation of it.

## Status

| | |
|---|---|
| Components implemented | **33** — 1 component set (9 variants) + 32 icons |
| Code Connect templates | **33**, all resolving against the live file |
| `tsc --noEmit` | passes |
| `vite build` | passes — ESM + `.d.ts` + CSS |
| `figma connect parse` | passes |
| `figma connect publish --dry-run` | resolves all 33 mappings |
| `figma connect publish` | **blocked — see [Publishing](#publishing)** |

The code side is complete and verified. The only outstanding item is plan eligibility on the
Figma account, which no change to this repo can resolve.

## Quick start

```bash
pnpm install
pnpm dev            # demo gallery — every Link variant + all 32 icons
pnpm build          # library build
pnpm figma:parse    # validate Code Connect templates
```

## What's mapped

| Figma | Code | Count |
|---|---|---|
| `Link` component set (`285:386`) | `src/Link/Link.tsx` | 1 set, 9 variants |
| `Icons` page components | `src/icons/*.tsx` | 32 |

### Link

Two variant properties, mapped exhaustively — an unmapped value would silently resolve to
`undefined`:

| Figma property | Figma values | Code prop |
|---|---|---|
| `Type` | `Default`, `Icon`, `Italic` | `variant="default" \| "icon" \| "italic"` |
| `State` | `Default`, `Active`, `Disabled` | `state="default" \| "active" \| "disabled"` |

`Type=Icon` renders the glyph with no label, so the template branches and emits a childless
snippet for that case rather than passing empty children.

### Design tokens

Lifted from the Figma library variables into `src/tokens.css`:

| Figma variable | CSS custom property | Value |
|---|---|---|
| `primary` | `--uic-color-primary` | `#131414` |
| `primary-40` | `--uic-color-primary-40` | `#a1a1a1` |
| `primary-20` | `--uic-color-primary-20` | `#d0d0d0` |
| `16/Regular`, `16 / Italic` | `--uic-font-body`, `--uic-font-size-body` | Fira Sans 16/400 |

## Friction worth noting

Three things in the design→code path needed handling that a naive port would get wrong. Noting
them because each is silent rather than loud:

**1. Exported icons carry a canvas rect.** Every icon SVG from the Figma export ships with
`<rect width="24" height="24" fill="#E5E5E5"/>` as its first child — the canvas backing, not part
of the glyph. Inlined as-is it renders a grey box behind each icon.

**2. Every clipPath shares one id.** All 22 clipped icon exports use `id="clip0_9_0"`. Inlined
individually that's fine; inlined together into one React page, the duplicate DOM ids collide and
clipping breaks — and it only breaks once two clipped icons appear on the same screen, so it
survives casual testing. They are uniquified per icon here.

**3. Layer-name typos become API names.** Four Figma layers carry spelling errors. Code Connect
binds on node id rather than name, so the code can use correct spellings while staying mapped:

| Figma layer | Code component |
|---|---|
| `Icon / Eliipsis` | `Ellipsis` |
| `Icon / Foward30` | `Forward30` |
| `Icon / SkipPrevius` | `SkipPrevious` |
| `Icon / VolumenUp` / `VolumenDown` / `VolumenMute` | `VolumeUp` / `VolumeDown` / `VolumeMute` |

`src/icons/figma.nodes.ts` holds the authoritative component → node-id map; the icon components
and their templates are both generated from it, so the mapping has one source of truth.

## How the mappings are written

These are **parserless templates** — `.figma.ts` files exporting a `` figma.code`...` `` template,
rather than the parser-based `figma.connect()` format. `figma.config.json` selects them with
`"parser": "html"` and `include: ["src/**/*.figma.ts"]`.

## Publishing

Publishing needs two things beyond this repo:

### 1. An access token

Create one at **Figma → Settings → Security → Personal access tokens** with:

| Scope | Level |
|---|---|
| Code Connect | **Write** |
| File content | **Read** |

```bash
export FIGMA_ACCESS_TOKEN=figd_...
pnpm figma:publish
```

For CI, prefer a **Plan Access Token (PLANT)** over a personal one — it's owned by the plan,
supports expiry up to a year, and uses fixed CLI scopes instead of inheriting one user's access.

### 2. An eligible plan and seat

Per Figma's own documentation, Code Connect is *"available on a Dev or Full seat on the
Organization, and Enterprise plans."*

On an ineligible plan every Code Connect surface refuses with:

> You need a Dev or Full seat on an Organization or Enterprise plan to use Code Connect.

This is not only the UI panel. The API refuses identically — both
`get_context_for_code_connect` and `list_file_components_for_code_connect` return that same
error, so there is no scripted way around it either.

**Quick way to check your own eligibility:** open the personal access token screen and look at
the scope list. If **Code Connect** does not appear as an option, the plan is ineligible — the
scope is not offered rather than offered-and-denied. That distinction is easy to miss, because
the failure presents as a missing button rather than a permission error.

## Layout

```
src/
├── index.ts              library entry
├── tokens.css            design tokens from Figma variables
├── Link/
│   ├── Link.tsx          component
│   ├── Link.css
│   └── Link.figma.ts     Code Connect template
├── icons/
│   ├── <Name>.tsx        32 icon components
│   ├── <Name>.figma.ts   32 Code Connect templates
│   ├── figma.nodes.ts    component -> Figma node id (source of truth)
│   ├── types.ts
│   └── index.ts
└── demo/                 local gallery, not part of the published library
```
