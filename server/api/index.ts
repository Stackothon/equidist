import { Request, Response } from "express";
import * as express from "express";
import { placesRouter } from "./places";
import { routesRouter } from "./routes";
export const router = express.Router();

router.use("/routes", routesRouter);
router.use("/places", placesRouter);

routes.use((req: Request, res: Response, next) => {
  const error = new Error("Not Found");
  res.status(404);
  next(error);
});
