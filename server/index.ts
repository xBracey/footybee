import http from "http";
import express from "express";
import next from "next";
import api from "../src/api";
import passport from "passport";

const dev = process.env.NODE_ENV !== "production";

const port = process.env.PORT || 8000;
const app = next({ dev });
const handle = app.getRequestHandler();

const handleServer = (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) {
    next();
  } else {
    return handle(req, res);
  }
};

(async () => {
  await app.prepare();
  const server = express();

  // server.get(
  //   "/",
  //   passport.authenticate("local", { failureRedirect: "/login" }),
  //   handleServer
  // );

  // server.get(
  //   "/login",
  //   passport.authenticate("local", { successRedirect: "/" }),
  //   handleServer
  // );

  server.get("*", handleServer);

  server.post("*", handleServer);

  server.put("*", handleServer);

  server.use("/api", api);

  const httpServer = http.createServer(server);

  httpServer.listen(port);

  console.log(`Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
