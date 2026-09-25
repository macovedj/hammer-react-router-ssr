import type { Route } from "./+types/api-status";

export function loader({ request }: Route.LoaderArgs) {
  return Response.json({ ok: true, method: request.method, runtime: process.version, timestamp: new Date().toISOString() });
}
