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
  await sequelize.authenticate().then(()=> {
    console.log('Connection has been established successfully.')
    sequelize.sync();
  }).catch(e=>console.log({ e }));
}

const start = async () => {
  connectDB().then(
    ()=>app.listen(PORT,'localhost')).
    catch(e=>console.log(e))
};
start().then(r => console.log(`server start at port:${PORT}`))
