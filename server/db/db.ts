// const Sequelize = require("sequelize");
import { Sequelize } from "sequelize";
// import pkg from "../../package.json";
// const pkg = require("../../package.json");

interface Configuration {
  logging?: boolean;
}

// const databaseName =
//   pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config: Configuration = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/equidist`,
  config
);

export default db;
