import express from "express";
import ViteExpress from "vite-express";
import {Sequelize} from "sequelize";
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const PORT= parseInt(process.env.SERVER_PORT || "")||7001

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
);

/*============*/

let { PGHOST, PGDATABASE='', PGUSER='', PGPASSWORD, ENDPOINT_ID } = process.env

export const Db= new Sequelize( PGDATABASE,PGUSER,PGPASSWORD,
    {
      host: PGHOST,
      port: 5432,
      dialect:`postgres`,
      dialectOptions: {
        options: {
          connection: `project=${ENDPOINT_ID}`,
        },
      }
    },
)