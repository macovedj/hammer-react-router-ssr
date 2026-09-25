import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:id", "routes/product.tsx"),
  route("static", "routes/static.tsx"),
  route("slow", "routes/slow.tsx"),
  route("client", "routes/client.tsx"),
  route("form", "routes/form.tsx"),
  route("session", "routes/session.tsx"),
  route("api/status", "routes/api-status.ts"),
  route("redirect", "routes/redirect.ts"),
  route("error", "routes/error.tsx"),
] satisfies RouteConfig;
