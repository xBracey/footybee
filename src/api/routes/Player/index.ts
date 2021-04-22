import { Router } from "express";
import {
  bulkGetController,
  createController,
  deleteController,
} from "../../controllers/player";

export const Player = Router();

Player.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Player.delete("/:name", async (req, res) => {
  const { status, error, response } = await deleteController(req.params.name);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Player.get("/", async (req, res) => {
  const { status, error, response } = await bulkGetController();

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
