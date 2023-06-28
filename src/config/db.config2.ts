import { Sequelize } from 'sequelize-typescript';

export class Database {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize({
      database: process.env.POSTGRES_DB,
      dialect: 'postgres',
      host: process.env.HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    });
  }

  public async connect() {
    try {
      await this.sequelize.authenticate();
      await this.sequelize.sync({ alter: true });
      console.log('Connection has been established successfully.');
    } catch (e) {
      console.log('Unable to connect to database!');
    }
  }
}