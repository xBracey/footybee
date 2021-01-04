import passport from "passport";
import { Strategy } from "passport-local";
import IUser from "../models/User/type";
import { getUser, loginUser } from "../services";

passport.use(
  new Strategy(async (username, password, callback) => {
    const { user } = await loginUser(username, password);

    return user ? callback(null, user) : callback(null, false);
  })
);

passport.serializeUser((user: IUser, callback) => {
  callback(null, user.username);
});

passport.deserializeUser(async (username: string, callback) => {
  const { user, error } = await getUser(username);

  return user ? callback(null, user) : callback(error);
});

export default passport;
