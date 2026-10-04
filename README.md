# UI Components — Figma Code Connect

React implementation of the **`ui-component`** Figma library, mapped back to design with
[Code Connect](https://developers.figma.com/docs/code-connect/).

- **Figma file:** [`ui-component`](https://www.figma.com/design/NVKkAkrE6hyV35V75Z0ohi/ui-component) (`NVKkAkrE6hyV35V75Z0ohi`)
- **Design credit:** the Figma library is the *UI Components* community kit by
  [@fabrizzio](https://figma.com/@fabrizzio) and [@edgarlr](https://figma.com/@edgarlr). The React
  code in this repo is an original implementation of it.

```bash
pnpm install
pnpm dev        # demo gallery — every Link variant + all 32 icons
pnpm build      # library build (ESM + .d.ts + CSS)
pnpm figma:parse    # validate Code Connect templates
pnpm figma:publish  # publish mappings to Figma (see "Publishing" below)
```

## What's mapped

| Figma | Code | Count |
|---|---|---|
| `Link` component set (`285:386`) | `src/Link/Link.tsx` | 1 set, 9 variants |
| `Icons` page components | `src/icons/*.tsx` | 32 |

**33 Code Connect templates total.**

### Link

The Figma component set exposes two variant properties, mapped exhaustively:

| Figma property | Figma values | Code prop |
|---|---|---|
| `Type` | `Default`, `Icon`, `Italic` | `variant="default" \| "icon" \| "italic"` |
| `State` | `Default`, `Active`, `Disabled` | `state="default" \| "active" \| "disabled"` |

`Type=Icon` renders the glyph with no label, so the template emits a different snippet shape for
that branch rather than passing empty children.

### Design tokens

Pulled from the Figma library variables into `src/tokens.css`:

| Figma variable | CSS custom property | Value |
|---|---|---|
| `primary` | `--uic-color-primary` | `#131414` |
| `primary-40` | `--uic-color-primary-40` | `#a1a1a1` |
| `primary-20` | `--uic-color-primary-20` | `#d0d0d0` |
| `16/Regular`, `16 / Italic` | `--uic-font-body`, `--uic-font-size-body` | Fira Sans 16/400 |

### Naming drift

Several Figma layers carry typos. The code uses the corrected spelling and Code Connect bridges
the gap via node id, which is the real source of truth:

| Figma layer | Code component |
|---|---|
| `Icon / Eliipsis` | `Ellipsis` |
| `Icon / Foward30` | `Forward30` |
| `Icon / SkipPrevius` | `SkipPrevious` |
| `Icon / VolumenUp` / `VolumenDown` / `VolumenMute` | `VolumeUp` / `VolumeDown` / `VolumeMute` |

`src/icons/figma.nodes.ts` holds the authoritative component → node-id map.

## How the mappings are written

These are **parserless templates** (`.figma.ts` exporting a `` figma.code`...` `` template), not the
parser-based `figma.connect()` format. `figma.config.json` selects them with
`"parser": "html"` and `include: ["src/**/*.figma.ts"]`.

Icons are generated rather than hand-written — see `src/icons/figma.nodes.ts` for the single
mapping table they derive from.

## Publishing

`pnpm figma:parse` and `figma connect publish --dry-run` both pass — all 33 mappings resolve
against the live file.

Publishing needs two things this repo cannot supply on its own:

1. **A Figma access token** — `FIGMA_ACCESS_TOKEN`, or `--token`.
2. **A Dev or Full seat on an Organization or Enterprise plan.** Code Connect is gated to those
   plans. On a Student/Professional-tier plan every Code Connect surface returns:

   > You need a Dev or Full seat on an Organization or Enterprise plan to use Code Connect.

   This applies to the Figma UI panel *and* the API — `get_context_for_code_connect` and
   `list_file_components_for_code_connect` both refuse on an ineligible seat. There is no
   repository-selection UI to click until the plan allows it.

Everything else is done and verified; the mappings publish as-is once the seat is eligible.

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
│   ├── figma.nodes.ts    component -> Figma node id
│   ├── types.ts
│   └── index.ts
└── demo/                 local gallery (not part of the published library)
```
