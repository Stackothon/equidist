//this is the access point for all things database related!
import db from "./db";
import User from "./models/User";

//associations could go here!
// User.associate = (models) => {
//   User.hasMany(models.Order, {
//     foreignKey: "userId",
//   });
// };

// Order.associate = (models) => {
//   Order.belongsTo(models.User, {
//     foreignKey: "id",
//   });
// };

export const dbExports = {
  db,
  User,
};

export default dbExports;
