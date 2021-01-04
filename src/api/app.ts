import express from "express";
import { League, User } from "./routes";
import passport from "./passport";
import bodyParser from "body-parser";
import expressSession from "express-session";

const secret = "slimy unicorn";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/league", League);
app.use("/api/user", User);

export default app;
