import { Router } from "express";
import {
  createController,
  bulkCreateController,
  deleteController,
  getController,
  getAllController,
  editController,
  getFromRoundController,
} from "../../controllers/knockoutMatch";

export const KnockoutMatch = Router();

KnockoutMatch.get("/round/:roundName", async (req, res) => {
  const { status, error, response } = await getFromRoundController(
    req.params.roundName
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

KnockoutMatch.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

KnockoutMatch.post("/bulk-create", async (req, res) => {
  const { status, error, response } = await bulkCreateController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

KnockoutMatch.delete("/:id", async (req, res) => {
  const { status, error, response } = await deleteController(req.params.id);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

KnockoutMatch.get("/:id", async (req, res) => {
  const { status, error, response } = await getController(req.params.id);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

KnockoutMatch.get("/", async (req, res) => {
  const { status, error, response } = await getAllController();

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

KnockoutMatch.put("/:id", async (req, res) => {
  const { status, error, response } = await editController(
    req.params.id,
    req.body
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
