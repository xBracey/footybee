import express from "express";
import { League, User } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/league", League);
app.use("/api/user", User);

export default app;
