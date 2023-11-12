import express from "express";
import ViteExpress from "vite-express";
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const PORT= parseInt(process.env.SERVER_PORT || "")||7001

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () => {

        console.log(`Server is listening on port ${PORT}...`)
    }
);


