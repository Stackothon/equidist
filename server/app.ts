import * as path from "path";
import { Application, Request, Response, ErrorRequestHandler } from "express";
import * as express from "express";
import * as morgan from "morgan";
const app: Application = express();
export default app;

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// api routes
// app.use("/api", require("./api/index.ts"));

app.get("/", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "..", "dist/index.html"))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "dist")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req: Request, res: Response, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    res.status(404);
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist/index.html"));
});

// error handling endware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
};

app.use(errorHandler);
