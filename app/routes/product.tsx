import type { Route } from "./+types/product";

export function loader({ params, request }: Route.LoaderArgs) {
  return { id: params.id, requestUrl: request.url, renderedAt: new Date().toISOString() };
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return <main><p className="eyebrow">DYNAMIC SSR</p><h1>Product {loaderData.id}</h1><div className="card"><p>Rendered per request at <code>{loaderData.renderedAt}</code>.</p><p>URL: <code>{loaderData.requestUrl}</code></p></div></main>;
}
