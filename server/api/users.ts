import { Request, Response } from "express";
import * as express from "express";
import { exports } from "../db";
const { User } = exports;
const router = express.Router();

router.get("/", async (req: Request, res: Response, next) => {
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

export default router;
