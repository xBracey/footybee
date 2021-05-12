import { Router } from "express";
import {
  bulkCreateController,
  getController,
} from "../../controllers/teamPrediction";

export const TeamPrediction = Router();

TeamPrediction.post("/create", async (req, res) => {
  const { status, error, response } = await bulkCreateController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

TeamPrediction.get("/:username", async (req, res) => {
  const { status, error, response } = await getController(req.params.username);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
