import { Router } from "express";
import {
  createController,
  deleteController,
  bulkGetController,
  getController,
} from "../../controllers/round";

export const Round = Router();

Round.get("/", async (_, res) => {
  const { status, error, response } = await bulkGetController();

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Round.get("/:name", async (req, res) => {
  const { status, error, response } = await getController(req.params.name);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Round.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Round.delete("/:id", async (req, res) => {
  const { status, error, response } = await deleteController(req.params.id);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
