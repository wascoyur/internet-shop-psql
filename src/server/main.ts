import express from "express";
import ViteExpress from "vite-express";
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import router from "./routes";
import morganMiddleware from "./config/morganMiddleware";
import { errorHandler } from "./middleware/ErrorHandleMiddleware";
import { HttpError } from "./errors/apiErrors";

export const prisma = new PrismaClient()


const app = express();
app.use(cors())
app.use(morganMiddleware)
app.use(express.json())
app.use('/api',router)

app.use(async (req, res, next) => {
  try {
    await prisma.$connect();
    next();
  } catch (error) {
    // Обработка ошибок Prisma
    next(errorHandler);
  } finally {
    await prisma.$disconnect();
  }
});

app.use(errorHandler)

dotenv.config()

const PORT= parseInt(process.env.SERVER_PORT || "")||7001


ViteExpress.listen(app, PORT, () => {
        console.log(`Server is listening on port ${PORT}...`)
    }
);


