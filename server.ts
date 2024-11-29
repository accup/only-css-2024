import express from "express";
import type React from "react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { createServer as createViteServer } from "vite";

/**
 * @returns {Promise<void>}
 */
async function createServer(): Promise<void> {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const App = (await vite.ssrLoadModule("/src/App.tsx"))[
        "default"
      ] as React.FC;

      const html = renderToStaticMarkup(createElement(App));

      const viteHtml = await vite.transformIndexHtml(url, html);

      res
        .status(200)
        .set({ "Content-Type": "text/html" })
        .end("<!DOCTYPE html>\n" + viteHtml);
    } catch (reason) {
      if (reason instanceof Error) {
        vite.ssrFixStacktrace(reason);
      }

      next(reason);
    }
  });

  app.listen(5173);
}

void createServer();
