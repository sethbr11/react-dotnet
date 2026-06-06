# React/.NET Bowling League Template

[![GitHub Stars](https://img.shields.io/github/stars/sethbr11/react-dotnet?style=flat-square)](https://github.com/sethbr11/react-dotnet/stargazers) [![GitHub Forks](https://img.shields.io/github/forks/sethbr11/react-dotnet?style=flat-square)](https://github.com/sethbr11/react-dotnet/network) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

This repository is a **template project** designed to help developers quickly bootstrap a full‑stack application using **React** (with Vite + TypeScript) and **.NET 8** (MVC Web API). It started as a homework assignment from the author's college years and now is maintained as a basic template for those interested.

---

## Tech Stack

| Layer         | Technology                       | Details                                                                 |
| ------------- | -------------------------------- | ----------------------------------------------------------------------- |
| **Front‑end** | Vite 8 + React 19 + TypeScript 6 | Fast HMR dev server, Vitest for testing, custom CSS styling.            |
| **Back‑end**  | .NET 8 MVC Web API               | Serves bowling-league data, Swagger UI, health checks, CORS configured. |
| **Database**  | SQLite + EF Core 8               | File-based DB (`BowlingLeague.sqlite`), easy to swap providers.         |
| **Testing**   | Vitest + React Testing Library   | Unit tests with jsdom environment.                                      |

---

## Quick Start

### Prerequisites

- **.NET 8 SDK** — verify with `dotnet --list-sdks` (should show `8.0.xxx`)
- **Node >= 22** — verify with `node -v`

### 1. Start the backend

```bash
cd backend
dotnet run
```

The API starts at **http://localhost:5231**. You can explore the endpoints at [http://localhost:5231/swagger](http://localhost:5231/swagger).

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

The dev server starts at **http://localhost:5173**. API requests to `/api/*` are automatically proxied to the backend.

### 3. Open the app

Navigate to **http://localhost:5173** — you should see the BLE Bowlers table populated with data from the .NET API.

> **Note:** The backend must be running first. If you see an empty table, make sure `dotnet run` is active in the `backend/` directory.

---

## Project Structure

```
react-dotnet/
├── backend/                 # .NET 8 Web API
│   ├── Controllers/         # API controllers (BowlingLeagueController)
│   ├── Data/                # EF Core context, repository pattern
│   ├── Properties/          # launchSettings.json (port config)
│   ├── BowlingLeague.sqlite # SQLite database file
│   └── Program.cs           # App entry point (CORS, DI, middleware)
├── frontend/                # React + Vite app
│   ├── src/
│   │   ├── App.tsx          # Main app component
│   │   ├── Header.tsx       # Page header with logo
│   │   ├── BowlersTable.tsx # Data table (fetches from /api/BowlingLeague)
│   │   └── types/           # TypeScript interfaces
│   ├── index.html           # Vite entry HTML
│   └── vite.config.ts       # Vite + Vitest config, API proxy
└── README.md                # This file
```

---

## Available Scripts

### Frontend (`cd frontend`)

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the Vite dev server           |
| `npm start`       | Alias for `npm run dev`             |
| `npm test`        | Run tests with Vitest               |
| `npm run build`   | Type-check and build for production |
| `npm run lint`    | Run ESLint                          |
| `npm run preview` | Preview the production build        |

### Backend (`cd backend`)

| Command        | Description           |
| -------------- | --------------------- |
| `dotnet run`   | Start the API server  |
| `dotnet build` | Build the project     |
| `dotnet test`  | Run any backend tests |

---

## Notes

- **CORS** is configured in `Program.cs` to allow `http://localhost:5173`.
- **API proxy** is configured in `vite.config.ts` — the frontend calls `/api/*` and Vite forwards requests to `http://localhost:5231`.
- **Health check** endpoint is available at `http://localhost:5231/health`.
- **Swagger UI** is available at `http://localhost:5231/swagger` (development only).

---

## License

MIT — free to fork, adapt, and use for your own projects.
