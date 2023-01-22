import { Request, Response } from "express";
import * as express from "express";
import { userRoutes } from "./users";
export const routes = express.Router();

routes.use("/users", userRoutes);

routes.use((req: Request, res: Response, next) => {
  const error = new Error("Not Found");
  res.status(404);
  next(error);
});
