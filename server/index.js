import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (e) {
    console.log(e);
  }
  app.listen(PORT, () => {
    console.log(`server start at port:${PORT}`);
  });
};
start();
