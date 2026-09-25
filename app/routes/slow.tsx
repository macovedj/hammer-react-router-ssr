import { Suspense } from "react";
import { Await } from "react-router";
import type { Route } from "./+types/slow";

export function loader() {
  return {
    shellAt: new Date().toISOString(),
    delayed: new Promise<{ message: string; resolvedAt: string }>((resolve) => {
      setTimeout(() => resolve({ message: "The delayed payload arrived.", resolvedAt: new Date().toISOString() }), 750);
    }),
  };
}

export default function Slow({ loaderData }: Route.ComponentProps) {
  return <main><p className="eyebrow">STREAMING SSR</p><h1>The shell should arrive first.</h1><p>Shell rendered at <code>{loaderData.shellAt}</code>.</p><Suspense fallback={<div className="card">Waiting for the streamed payload…</div>}><Await resolve={loaderData.delayed}>{(result) => <div className="card"><strong>{result.message}</strong><br /><code>{result.resolvedAt}</code></div>}</Await></Suspense></main>;
}
