import { Request, Response } from "express";
import * as express from "express";
export const routesRouter = express.Router();
import axios from "axios";
const key = process.env.key;

routesRouter.get("/", async (req: Request, res: Response, next) => {
  try {
    const { data } = await axios.post(
      "https://maps.googleapis.com/maps/api/distancematrix/json?" +
        `origins=place_id:ChIJUzsnexBFwokRyojPFeRk8Z4` + //Brooklyn House
        `&destinations=place_id:ChIJsd9dvkNawokRI7WmdelKZgc` + //Pier 6
        `%7C` + // url encoding for | symbol
        `place_id:ChIJlUrnz8NfwokRDU5cXjb-tws` + //Queens House
        "&fields=*" + //Return all results
        `&key=${key}`
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});
