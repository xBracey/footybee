import passport from "passport";
import { Strategy } from "passport-local";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { User } from "../models/User/index";
import { getUser, loginUser } from "../services";
import jwt from "jsonwebtoken";

const passportSecret =
  "uofi5pN1vBQBrf7VA44UwzHLUjH0ykYamJ3nybEhlUc5TLjGDa0SlMRinhyqpCzZvRrM0QGuFvvX9elD";

passport.use(
  new Strategy(async (username, password, callback) => {
    const { user } = await loginUser(username, password);

    const userSigned = user
      ? jwt.sign(user.toJSON(), passportSecret, { expiresIn: "7 days" })
      : false;

    return callback(null, userSigned);
  })
);

passport.use(
  new BearerStrategy((token, done) => {
    try {
      const user: any = jwt.verify(token, passportSecret);

      done(null, user.username);
    } catch (error) {
      done(null, false);
    }
  })
);

passport.serializeUser((user: User, callback) => {
  callback(null, user.$get("username"));
});

passport.deserializeUser(async (username: string, callback) => {
  const { user, error } = await getUser(username);

  return user ? callback(null, user) : callback(error);
});

export default passport;
