# Hammer React Router SSR

A deterministic React Router Framework Mode fixture for testing browser-hosted development environments such as edit-test.dev.

## Requirements

- Node.js 20.19 or newer on the 20.x line, or Node.js 22.12 or newer
- npm

## Coverage

- Node SSR and React hydration
- Dynamic route parameters and request URLs
- Build-time prerendering at `/static`
- Promise streaming at `/slow`
- Browser-only loading at `/client`
- Server form action and redirect at `/form`
- HttpOnly cookie round-trip at `/session`
- JSON resource route at `/api/status`
- Redirect, 404, and intentional error responses

The fixture uses no database, external API, remote font, or required environment variable.

## Commands

```sh
npm install
npm run dev
npm run typecheck
npm run test:smoke
```

The smoke command creates fresh production output before starting its isolated test server. To build and run the production server manually:

```sh
npm run build
npm start
```

The development server chooses an available local port. The production server uses `PORT` when provided and otherwise listens on port 3000.
