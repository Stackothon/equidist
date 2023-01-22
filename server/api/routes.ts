import { Request, Response } from "express";
import * as express from "express";
export const routesRouter = express.Router();
import axios from "axios";
const key = process.env.key;

routesRouter.get("/", async (req: Request, res: Response, next) => {
  try {
    // const data = await axios.post('https://routes.googleapis.com/distanceMatrix/v2:computerRouteMatrix/fields=*');
    // res.json(data);
  } catch (err) {
    next(err);
  }
});
