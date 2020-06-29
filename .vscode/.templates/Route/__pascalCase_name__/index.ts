import { Router } from "express";
import {
  createController,
  bulkCreateController,
  deleteController,
} from "../../controllers";

export const {{camelCase name}} = Router();

{{camelCase name}}.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

{{camelCase name}}.post("/bulk-create", async (req, res) => {
  const { status, error, response } = await bulkCreateController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

{{camelCase name}}.delete("/:id", async (req, res) => {
  const { status, error, response } = await deleteController(req.params.id);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
