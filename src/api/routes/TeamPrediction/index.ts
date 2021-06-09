import { Router } from "express";
import {
  bulkCreateController,
  getController,
} from "../../controllers/teamPrediction";
import { predictionLock } from "../../../site/lib/predictionLock";

export const TeamPrediction = Router();

TeamPrediction.post("/create", async (req, res) => {
  if (predictionLock) {
    return res.status(403).send({ error: "Too late to make prediction!" });
  }

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
