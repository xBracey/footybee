import { Router } from "express";
import {
	createController,
	bulkCreateController,
	deleteController,
} from "../controllers/{{camelCase name}}";

import { authMiddleware } from "../authentication/middleware";

const router = Router();

router.use(authMiddleware);

router.post("/create", async (req, res) => {
	const { status, error, response } = await createController(req.body);

	return error
		? res.status(status).send({ error })
		: res.status(status).send(response);
});

router.post("/bulk-create", async (req, res) => {
	const { status, error, response } = await bulkCreateController(req.body);

	return error
		? res.status(status).send({ error })
		: res.status(status).send(response);
});

router.delete("/:name", async (req, res) => {
	const { status, error, response } = await deleteController(req.body);

	return error
		? res.status(status).send({ error })
		: res.status(status).send(response);
});

export default router;
