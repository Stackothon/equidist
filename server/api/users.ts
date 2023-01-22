import { Request, Response } from "express";
import * as express from "express";
import { dbExports } from "../db";
const { User } = dbExports;
export const userRoutes = express.Router();

userRoutes.get("/", async (req: Request, res: Response, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
