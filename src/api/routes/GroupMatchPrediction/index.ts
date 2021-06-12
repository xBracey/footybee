import { Router } from "express";
import {
  bulkCreateController,
  getController,
} from "../../controllers/groupMatchPrediction";
import { predictionLock } from "../../../site/lib/predictionLock";
import passport from "passport";

export const GroupMatchPrediction = Router();

GroupMatchPrediction.post(
  "/create",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    if (predictionLock(req.user)) {
      return res.status(403).send({ error: "Too late to make prediction!" });
    }

    const { status, error, response } = await bulkCreateController(req.body);

    return error
      ? res.status(status).send({ error })
      : res.status(status).send(response);
  }
);

GroupMatchPrediction.get("/:username", async (req, res) => {
  const { status, error, response } = await getController(req.params.username);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
