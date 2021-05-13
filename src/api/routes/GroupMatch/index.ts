import { Router } from "express";
import {
  createController,
  bulkCreateController,
  deleteController,
  getFromGroupController,
  getController,
  getAllController,
  editController,
} from "../../controllers/groupMatch";

export const GroupMatch = Router();

GroupMatch.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

GroupMatch.post("/bulk-create", async (req, res) => {
  const { status, error, response } = await bulkCreateController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

GroupMatch.delete("/:id", async (req, res) => {
  const { status, error, response } = await deleteController(req.params.id);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

GroupMatch.get("/:id", async (req, res) => {
  const { status, error, response } = await getController(req.params.id);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

GroupMatch.get("/", async (req, res) => {
  const { status, error, response } = await getAllController();

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

GroupMatch.get("/group/:groupLetter", async (req, res) => {
  const { status, error, response } = await getFromGroupController(
    req.params.groupLetter
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

GroupMatch.put("/:id", async (req, res) => {
  const { status, error, response } = await editController(
    req.params.id,
    req.body
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
