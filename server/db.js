import { Sequelize } from "sequelize";

const sequelize = new Sequelize('my-online-store', 'admin-internet-shop', '1', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});
export default sequelize;
