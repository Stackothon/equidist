// const Sequelize = require("sequelize");
// const db = require("../db");
import { DataTypes, Model, Optional } from "sequelize";
import db from "../db";

interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = db.define<UserInstance>("user", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

export default User;
