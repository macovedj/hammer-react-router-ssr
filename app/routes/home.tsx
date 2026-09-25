import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router SSR Lab" },
    { name: "description", content: "A deterministic edit-test.dev fixture" },
  ];
}

export function loader() {
  return {
    renderedAt: new Date().toISOString(),
    runtime: `Node ${process.version}`,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <main>
      <p className="eyebrow">SSR + HYDRATION CONTROL</p>
      <h1>React Router is rendering on the server.</h1>
      <p className="lede">
        This text and the request timestamp are present in the initial HTML. The
        counter proves that the page hydrated in the browser.
      </p>
      <dl className="facts">
        <div><dt>Rendered</dt><dd data-testid="server-time">{loaderData.renderedAt}</dd></div>
        <div><dt>Runtime</dt><dd>{loaderData.runtime}</dd></div>
      </dl>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Hydrated count: {count}
      </button>
    </main>
  );
}
