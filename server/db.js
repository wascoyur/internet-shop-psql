import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  'my-online-store',
  'developer',
  'developer',
  { dialect: 'postgres', host: 'localhost', port: 5432 }
)
export default sequelize
