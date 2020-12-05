import { Router } from "express";
import { createController, deleteController } from "../../controllers/user";

export const User = Router();

User.post("/register", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

User.delete("/:username", async (req, res) => {
  const { status, error, response } = await deleteController(
    req.params.username
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
