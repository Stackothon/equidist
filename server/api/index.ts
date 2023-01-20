import { Request, Response } from "express";
import * as express from "express";
const router = express.Router();

router.use("/users", require("./users"));

router.use((req: Request, res: Response, next) => {
  const error = new Error("Not Found");
  res.status(404);
  next(error);
});

export default router;
