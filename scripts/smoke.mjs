import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const port = 4381;
const origin = `http://127.0.0.1:${port}`;
const server = spawn("npm", ["start"], {
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Timed out waiting for the fixture server");
}

try {
  await waitForServer();
  const home = await fetch(origin);
  assert.equal(home.status, 200);
  assert.match(await home.text(), /React Router is rendering on the server/);

  const product = await fetch(`${origin}/products/42`);
  assert.equal(product.status, 200);
  assert.match(await product.text(), /Product[\s\S]*42/);

  const client = await fetch(`${origin}/client`);
  assert.equal(client.status, 200);
  assert.match(await client.text(), /Waiting for the browser/);

  const api = await fetch(`${origin}/api/status`).then((response) => response.json());
  assert.equal(api.ok, true);

  const redirect = await fetch(`${origin}/redirect`, { redirect: "manual" });
  assert.equal(redirect.status, 307);
  assert.equal(redirect.headers.get("location"), "/products/redirected");

  assert.equal((await fetch(`${origin}/missing`)).status, 404);
  assert.equal((await fetch(`${origin}/error`)).status, 418);
  console.log("React Router production smoke checks passed.");
} finally {
  server.kill("SIGTERM");
}
