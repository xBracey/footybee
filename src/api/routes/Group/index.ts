import { Router } from "express";
import {
  createController,
  bulkCreateController,
  deleteController,
  bulkGetController,
} from "../../controllers/group";

export const Group = Router();

Group.get("/", async (_, res) => {
  const { status, error, response } = await bulkGetController();

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Group.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Group.post("/bulk-create", async (req, res) => {
  const { status, error, response } = await bulkCreateController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

Group.delete("/:id", async (req, res) => {
  const { status, error, response } = await deleteController(req.params.id);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
