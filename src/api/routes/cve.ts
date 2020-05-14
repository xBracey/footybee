import { getController, searchController } from "./../controller/cve";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { status, error, response } = await getController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

router.get("/:search", async (req, res) => {
  const { search } = req.params;

  const { status, error, response } = await searchController(search);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

export default router;
