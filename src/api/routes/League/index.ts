import { Router } from "express";
import { generateWords } from "../../lib/codeGenerator/codeGenerator";
import {
  createController,
  bulkCreateController,
  deleteController,
  getController,
} from "../../controllers/league";

export const League = Router();

League.post("/create", async (req, res) => {
  const { status, error, response } = await createController({
    ...req.body,
    code: generateWords(),
  });

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

League.get("/:leagueName", async (req, res) => {
  const { status, error, response } = await getController(
    req.params.leagueName
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
