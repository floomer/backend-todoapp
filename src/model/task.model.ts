import { DataTypes, Model } from 'sequelize';
import { Database } from '../config/db.config';

export default class Task extends Model {
  public id?: number;
  public title!: string;
  public description?: string;
  public author_id!: number;
}
Task.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  author_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: new Database().sequelize,
  tableName: 'tasks',
  timestamps: false
});