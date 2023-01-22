import { Request, Response } from "express";
import * as express from "express";
export const placesRouter = express.Router();
import axios from "axios";
require("dotenv").config();
const key = process.env.key;

placesRouter.get("/:search", async (req: Request, res: Response, next) => {
  const search = req.params.search.split("_").join(" "); //deslugged
  try {
    const { data } = await axios.get(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?" +
        "inputtype=textquery" +
        `&input=${search}` +
        `&fields=place_id,formatted_address,name` +
        `&key=${key}`
    );
    if (data.status === "OK") {
      res.json(data);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});
