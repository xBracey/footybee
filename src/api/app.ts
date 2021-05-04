import express, { Router } from "express";
import { League, User, Player, Team, Group, GroupMatch } from "./routes";
import passport from "./passport";
import bodyParser from "body-parser";
import expressSession from "express-session";

const secret = "slimy unicorn";

const app = Router();

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

app.use("/league", League);
app.use("/user", User);
app.use("/player", Player);
app.use("/team", Team);
app.use("/group", Group);
app.use("/groupMatch", GroupMatch);

export default app;
