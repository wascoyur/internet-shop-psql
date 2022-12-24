import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';
import cors from 'cors';
import routes from './routes/index.js';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);
app.get('/', (req, res) => {
  res.status(200).json({message: 'working!!!'});
});

const connectDB = async ()=>{
  await sequelize.authenticate();
  await sequelize.sync();
}

const start = async () => {
  try {
connectDB()
    app.listen(PORT, () => {
      console.log(`server start at port:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
