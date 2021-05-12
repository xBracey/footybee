import { Router } from "express";
import {
  bulkCreateController,
  getController,
} from "../../controllers/groupMatchPrediction";

export const GroupMatchPrediction = Router();

GroupMatchPrediction.post("/create", async (req, res) => {
  const { status, error, response } = await bulkCreateController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

GroupMatchPrediction.get("/:username", async (req, res) => {
  const { status, error, response } = await getController(req.params.username);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
