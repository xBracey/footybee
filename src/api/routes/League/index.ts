import { Router } from "express";
import {
  createController,
  bulkCreateController,
  deleteController,
} from "../../controllers/league";

export const League = Router();

League.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

League.post("/bulk-create", async (req, res) => {
  const { status, error, response } = await bulkCreateController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

League.delete("/:leagueName", async (req, res) => {
  const { status, error, response } = await deleteController(
    req.params.leagueName
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
