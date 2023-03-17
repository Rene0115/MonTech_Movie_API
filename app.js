import express from "express";
import database from "./config/db.config.js";
import dotenv from "dotenv";
import middleware from "./middleware/index.middleware.js";

dotenv.config();
const app = express();

middleware(app);

const port = process.env.PORT;
const start = () => {
  database();
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};
start();
