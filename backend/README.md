# Backend — .NET 8 Web API

The backend is an **ASP.NET Core 8** Web API that serves bowling league data from a **SQLite** database using **Entity Framework Core 8**.

---

## Getting Started

```bash
dotnet run
```

The API starts at **http://localhost:5231** (configured in `Properties/launchSettings.json`).

> No database setup needed — the SQLite file (`BowlingLeague.sqlite`) is included in the repo and ready to use.

---

## Project Structure

| File / Directory                         | Purpose                                                    |
| ---------------------------------------- | ---------------------------------------------------------- |
| `Program.cs`                             | App entry point — configures DI, CORS, middleware pipeline |
| `Controllers/BowlingLeagueController.cs` | API endpoint for bowler data                               |
| `Data/BowlingLeagueContext.cs`           | EF Core `DbContext` with entity mappings                   |
| `Data/IBowlingLeagueRepository.cs`       | Repository interface (abstraction layer)                   |
| `Data/EFBowlingLeagueRepository.cs`      | EF Core repository implementation                          |
| `Data/Bowler.cs`, `Team.cs`, etc.        | Entity models                                              |
| `BowlingLeague.sqlite`                   | SQLite database file                                       |
| `Properties/launchSettings.json`         | Dev server port and environment settings                   |
| `appsettings.json`                       | Connection string and app configuration                    |

---

## API Endpoints

| Method | URL                  | Description                              |
| ------ | -------------------- | ---------------------------------------- |
| GET    | `/api/BowlingLeague` | Returns all bowlers with their team info |
| GET    | `/health`            | Health check (returns `Healthy`)         |
| GET    | `/swagger`           | Swagger UI (development only)            |

---

## CORS

CORS is configured in `Program.cs` to allow requests from the frontend dev server:

```csharp
policy.WithOrigins("http://localhost:5173")
      .AllowAnyHeader()
      .AllowAnyMethod();
```

If you change the frontend port, update these origins accordingly.

---

## Database

The app uses a **SQLite** database via EF Core. The connection string is defined in `appsettings.json`:

```json
"ConnectionStrings": {
  "BowlingLeagueConnection": "Data Source=BowlingLeague.sqlite"
}
```

The database file is included in the repository, so no migrations or seeding are needed to get started.

### Switching to a different database

Replace the `UseSqlite(...)` call in `Program.cs` with another EF Core provider (e.g., `UseSqlServer`, `UseNpgsql`) and update the connection string.

---

## Configuration

### Port

The API runs on port **5231** by default. To change it, edit `Properties/launchSettings.json`:

```json
"applicationUrl": "http://localhost:5231"
```

> If you change the backend port, also update the frontend's proxy target in `frontend/vite.config.ts`.

### Environment

The app runs in `Development` mode by default, which enables Swagger UI and detailed error pages. For production, set `ASPNETCORE_ENVIRONMENT=Production`.
