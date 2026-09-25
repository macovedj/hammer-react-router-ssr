export function loader() {
  throw new Response("Intentional fixture failure", { status: 418, statusText: "Intentional Teapot" });
}

export default function ErrorRoute() { return null; }
