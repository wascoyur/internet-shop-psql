import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME, 'postgres', '1', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});
export default sequelize;
