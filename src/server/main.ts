import express from "express";
import ViteExpress from "vite-express";
import dotenv from 'dotenv'
import {connectDb} from "./db";

const app = express();
dotenv.config()
const PORT= parseInt(process.env.SERVER_PORT || "")||7001

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () => {
        connectDb().then(_=>{
            console.log(`Db connected`)
        }).catch(e=>{
            console.log(`error connection DB${e}`)
        })
        console.log(`Server is listening on port ${PORT}...`)
    }
);


