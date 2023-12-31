import { Model, DataTypes } from 'sequelize';
import { Database } from '../config/db.config';

export default class User extends Model {
  public id?: number;
  public name!: string;
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255)
  }
}, {
  sequelize: new Database().sequelize,
  tableName: 'users',
  timestamps: false
});