import { Form, redirect } from "react-router";
import type { Route } from "./+types/session";

function readName(cookieHeader: string | null) {
  const match = cookieHeader?.match(/(?:^|;\s*)hammer_name=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}
export function loader({ request }: Route.LoaderArgs) { return { name: readName(request.headers.get("cookie")) }; }
export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  const name = encodeURIComponent(String(data.get("name") ?? "visitor"));
  return redirect("/session", { headers: { "Set-Cookie": `hammer_name=${name}; Path=/; HttpOnly; SameSite=Lax` } });
}

export default function SessionRoute({ loaderData }: Route.ComponentProps) {
  return <main><p className="eyebrow">REQUEST COOKIES</p><h1>{loaderData.name ? `Hello, ${loaderData.name}.` : "No session cookie yet."}</h1><Form method="post"><label htmlFor="name">Name</label><input id="name" name="name" required /><button type="submit">Set HttpOnly cookie</button></Form></main>;
}
