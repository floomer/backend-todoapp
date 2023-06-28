import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

const hostName = process.env.HOST;
const userName = process.env.POSTGRES_USER as string;
const password = process.env.POSTGRES_PASSWORD as string;
const database = process.env.POSTGRES_DB as string;
const port = process.env.POSTGRES_PORT;

const sequelizeConnection = new Sequelize(database, userName, password, {
  host: hostName,
  dialect: 'postgres'
});
export default sequelizeConnection;
