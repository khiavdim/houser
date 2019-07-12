require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 4000;
const ctrl = require("./controller");
const massive = require("massive");
const { CONNECTION_STRING} = process.env;

//MIDDLEWARE
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

//ENDPOINTS
app.get("/api/houses", ctrl.getAll);
app.delete('/api/houses/:id', ctrl.delete)
app.post("/api/houses", ctrl.add);

//LISTENING
app.listen(PORT, console.log(`Listening from Port ${PORT}`));
