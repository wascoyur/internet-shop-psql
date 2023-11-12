import express from "express";
import ViteExpress from "vite-express";
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const app = express();
dotenv.config()
const PORT= parseInt(process.env.SERVER_PORT || "")||7001

app.get("/users", async (_, res) => {
  const users = await prisma.device.findFirst();
  res.json(users);
});

ViteExpress.listen(app, PORT, () => {

        console.log(`Server is listening on port ${PORT}...`)
    }
);


