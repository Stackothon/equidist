import app from "./app";
// const { db } = require('./db')
const PORT: string | number = process.env.PORT || 8080;
// const seed = require("../script/seed");

const init = async () => {
  try {
    // if(process.env.SEED === 'true'){
    //   await seed();
    // }
    // else {
    //   await db.sync()
    // }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
