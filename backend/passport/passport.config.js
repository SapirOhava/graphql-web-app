import passport from "passport";
import bcrypt from "bcryptjs"; // for hashing the passwords

import User from "../models/user.model.js";
import { GraphQLLocalStrategy } from "graphql-passport";

// we call this configurePassport in our index.js file
export const configurePassport = async () => {
  // done is a callback function
  passport.serializeUser((user, done) => {
    console.log("Serializing user");
    // the null is when we dont have any errors
    //user._id will also work here
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("Deserializing user");
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.use(
    //this local GraphQLLocalStrategy get an async callback func, which will be our login func (will see it in our resolvers)
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("Invalid username or password");
        }
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
          throw new Error("Invalid username or password");
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );
};
