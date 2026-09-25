import type { Route } from "./+types/static";

export function loader() { return { builtAt: new Date().toISOString() }; }

export default function StaticRoute({ loaderData }: Route.ComponentProps) {
  return <main><p className="eyebrow">BUILD-TIME PRERENDER</p><h1>This route is emitted as static HTML.</h1><p className="lede">Build timestamp: <code>{loaderData.builtAt}</code></p></main>;
}
