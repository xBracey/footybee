import { Router } from "express";
import passport from "passport";
import {
  bulkGetController,
  createController,
  deleteController,
  editController,
  getController,
  getFromGroupController,
  getFromRoundController,
} from "../../controllers/team";

export const Team = Router();

Team.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Team.delete("/:name", async (req, res) => {
  const { status, error, response } = await deleteController(req.params.name);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Team.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const { status, error, response } = await bulkGetController(req.user);

    return error
      ? res.status(status).send({ error })
      : res.status(status).send(response);
  }
);

Team.get("/:name", async (req, res) => {
  const { status, error, response } = await getController(req.params.name);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Team.put("/:name", async (req, res) => {
  const { status, error, response } = await editController(
    req.params.name,
    req.body
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Team.get("/group/:groupLetter", async (req, res) => {
  const { status, error, response } = await getFromGroupController(
    req.params.groupLetter
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Team.get("/round/:roundName", async (req, res) => {
  const { status, error, response } = await getFromRoundController(
    req.params.roundName
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
