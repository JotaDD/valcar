import express from "express";
import { config } from 'dotenv';
import { router } from "./routes";

const app = express();

const port = process.env.PORT || 8000;

app.use(router);

app.listen(port, () => {
  console.log(`Server Running on Port: ${ port }`);
});
