import { useState } from "react";
import type { Route } from "./+types/client";

export async function clientLoader() {
  await new Promise((resolve) => setTimeout(resolve, 150));
  return { loadedAt: new Date().toISOString(), userAgent: navigator.userAgent };
}
clientLoader.hydrate = true as const;

export function HydrateFallback() {
  return <main><p className="eyebrow">CLIENT-ONLY</p><h1>Waiting for the browser…</h1></main>;
}

export default function ClientRoute({ loaderData }: Route.ComponentProps) {
  const [count, setCount] = useState(0);
  return <main><p className="eyebrow">CLIENT-ONLY DATA</p><h1>This route’s data comes from the browser.</h1><p className="lede">Loaded at <code>{loaderData.loadedAt}</code></p><p className="card">{loaderData.userAgent}</p><button onClick={() => setCount((value) => value + 1)}>Client count: {count}</button></main>;
}
