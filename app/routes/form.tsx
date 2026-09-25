import { Form, redirect } from "react-router";
import type { Route } from "./+types/form";

const notes = ["This list lives in the server process."];
export function loader() { return { notes }; }
export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  const note = String(data.get("note") ?? "").trim();
  if (note) notes.push(note);
  return redirect("/form");
}

export default function ActionRoute({ loaderData }: Route.ComponentProps) {
  return <main><p className="eyebrow">SERVER ACTION</p><h1>POST, redirect, revalidate.</h1><Form method="post"><label htmlFor="note">New server-side note</label><input id="note" name="note" required /><button type="submit">Add note</button></Form><ul>{loaderData.notes.map((note, index) => <li key={`${note}-${index}`}>{note}</li>)}</ul></main>;
}
