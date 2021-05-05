import { Router } from "express";
import {
  bulkGetController,
  createController,
  deleteController,
  editController,
  getController,
  getFromGroupController,
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

Team.get("/", async (req, res) => {
  const { status, error, response } = await bulkGetController();

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

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
