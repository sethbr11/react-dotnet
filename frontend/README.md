# Frontend — React + Vite + TypeScript

The frontend is a **React 19** single-page app built with **Vite 8** and **TypeScript 6**. It displays bowling league data fetched from the .NET backend API.

---

## Getting Started

```bash
npm install    # install dependencies
npm run dev    # start dev server at http://localhost:5173
```

> **Important:** The backend must be running at `http://localhost:5231` before starting the frontend. API calls to `/api/*` are proxied to the backend via the Vite dev server — see `vite.config.ts`.

---

## Key Files

| File / Directory       | Purpose                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| `index.html`           | Vite entry point (must be at the project root, not in `public/`) |
| `src/index.tsx`        | React entry — mounts `<App />` into `#root`                      |
| `src/App.tsx`          | Main layout — renders `Header` and `BowlersTable`                |
| `src/Header.tsx`       | Page header with BLE logo, title, and description                |
| `src/BowlersTable.tsx` | Fetches `/api/BowlingLeague` and renders a data table            |
| `src/types/`           | TypeScript interfaces (`Bowler`, etc.)                           |
| `src/App.css`          | Component styles (header, table, layout)                         |
| `src/index.css`        | Global base styles (font, background)                            |
| `vite.config.ts`       | Vite config — React plugin, API proxy, Vitest settings           |

---

## Scripts

| Command           | Description                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR              |
| `npm start`       | Alias for `npm run dev`                         |
| `npm test`        | Run unit tests with Vitest (watch mode)         |
| `npm run build`   | Type-check with `tsc` then build for production |
| `npm run lint`    | Lint all files with ESLint                      |
| `npm run preview` | Serve the production build locally for testing  |
| `npm run clean`   | Remove `node_modules` and `package-lock.json`   |

---

## Testing

Tests use **Vitest** with **React Testing Library** and **jsdom**.

```bash
npm test              # run in watch mode
npm test -- --run     # run once and exit
```

Test config lives in `vite.config.ts` under the `test` key. The setup file at `src/setupTests.ts` loads `@testing-library/jest-dom` matchers (e.g., `.toBeInTheDocument()`).

---

## API Proxy

The Vite dev server proxies `/api/*` requests to the backend:

```ts
// vite.config.ts
server: {
  port: 5173,
  proxy: {
    '/api': {
      target: 'http://localhost:5231',
      changeOrigin: true,
      secure: false,
    },
  },
}
```

This means frontend code can use relative paths like `fetch('/api/BowlingLeague')` — no hardcoded backend URLs needed.

---

## Styling

The app uses **vanilla CSS** (no CSS framework). Styles are split between:

- **`index.css`** — base/global styles (font, body background)
- **`App.css`** — component styles (navbar, table, layout)

The [Inter](https://fonts.google.com/specimen/Inter) font is loaded from Google Fonts in `index.html`.
