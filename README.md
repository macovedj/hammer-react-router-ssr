# Hammer React Router SSR

A deterministic React Router Framework Mode fixture for testing browser-hosted development environments such as edit-test.dev.

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
npm run build
npm run test:smoke
npm start
```

The development server chooses an available local port. The production server uses `PORT` when provided and otherwise listens on port 3000.
