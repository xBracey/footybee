import { Router } from "express";
import _ from "lodash";
import passport from "passport";
import {
  createController,
  deleteController,
  getController,
  getPointsController,
} from "../../controllers/user";

export const User = Router();

User.post("/register", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

User.delete("/:username", async (req, res) => {
  const { status, error, response } = await deleteController(
    req.params.username
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

User.post("/login", (req, res, next) => {
  passport.authenticate("local", (req, response, error) => {
    return !response ? res.status(401).send() : res.status(200).send(response);
  })(req, res, next);
});

User.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const { status, error, response } = await getController(req.user);

    return error
      ? res.status(status).send({ error })
      : res
          .status(status)
          .send(
            _.pick(response, [
              "username",
              "displayName",
              "admin",
              "verified",
              "leagues",
            ])
          );
  }
);

User.get("/points/:username", async (req, res) => {
  const { status, error, response } = await getPointsController(
    req.params.username
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
