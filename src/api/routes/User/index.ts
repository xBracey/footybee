import { Router } from "express";
import _ from "lodash";
import passport from "passport";
import { sendMail } from "../../lib/email";
import {
  createController,
  deleteController,
  editDisplayNameController,
  emailVerifyController,
  forgotPasswordController,
  getController,
  getPointsController,
  goldenBootController,
  resetPasswordController,
  winnerController,
} from "../../controllers/user";
import { predictionLock } from "../../../site/lib/predictionLock";

export const User = Router();

User.post("/register", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  if (error) return res.status(status).send({ error });

  // const host = req.get("host");

  // sendMail({
  //   from: '"FootyBee - Admin" <hello@footybee.com>',
  //   to: response.email,
  //   subject: "Email Verification",
  //   text: `Verify your email here ${req.protocol}://${host}/verify?token=${response.verification_token}`,
  // });

  res.status(status).send(response);
});

User.delete("/:username", async (req, res) => {
  const { status, error, response } = await deleteController(
    req.params.username
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

User.post("/login", (req, res, next) => {
  passport.authenticate("local", (req, response, error) => {
    return !response ? res.status(401).send() : res.status(200).send(response);
  })(req, res, next);
});

User.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const { status, error, response } = await getController(req.user);

    return error
      ? res.status(status).send({ error })
      : res.status(status).send(response);
  }
);

User.get("/points/:username", async (req, res) => {
  const { status, error, response } = await getPointsController(
    req.params.username
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

User.post(
  "/prediction/goldenboot",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    if (predictionLock(req.user)) {
      return res.status(403).send({ error: "Too late to make prediction!" });
    }

    const { status, error, response } = await goldenBootController(
      req.user,
      req.body.name
    );

    return error
      ? res.status(status).send({ error })
      : res.status(status).send(response);
  }
);

User.post(
  "/prediction/winner",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    if (predictionLock(req.user)) {
      return res.status(403).send({ error: "Too late to make prediction!" });
    }

    const { status, error, response } = await winnerController(
      req.user,
      req.body.name
    );

    return error
      ? res.status(status).send({ error })
      : res.status(status).send(response);
  }
);

User.post("/email-verify", async (req, res) => {
  const { status, error, response } = await emailVerifyController(
    req.body.token
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

User.post("/forgot-password", async (req, res) => {
  const { status, response } = await forgotPasswordController(req.body.email);

  if (!response?.username) return res.status(status).send({});

  const host = req.get("host");

  sendMail({
    from: '"FootyBee - Admin" <hello@footybee.com>',
    to: response.email,
    subject: "Email Verification",
    text: `Reset your password here ${req.protocol}://${host}/reset-password?token=${response.forgot_password_token}`,
  });

  return res.status(status).send({});
});

User.post("/reset-password", async (req, res) => {
  const { status, error, response } = await resetPasswordController(
    req.body.token,
    req.body.password
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

User.post(
  "/displayName",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    console.log(req.user);

    const { status, error, response } = await editDisplayNameController(
      req.user,
      req.body.displayName
    );

    return error
      ? res.status(status).send({ error })
      : res.status(status).send(response);
  }
);

User.get("/:username", async (req, res) => {
  const { status, error, response } = await getController(req.params.username);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
