import { Request, Response } from "express";
import * as express from "express";
export const placesRouter = express.Router();
import axios from "axios";
require("dotenv").config();
const key = process.env.key;

placesRouter.get("/", async (req: Request, res: Response, next) => {
  const search = "1903 78th st";
  try {
    const { data } = await axios.post(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?" +
        "inputtype=textquery" +
        `&input=${search}` +
        `&fields=place_id,formatted_address,name` +
        `&key=${key}`
    );
    if (data.status === "OK") {
      const place1id = data.candidates[0].place_id;
      res.json(data);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});
