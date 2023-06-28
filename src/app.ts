import express, { Express } from 'express';
import 'dotenv/config';
import userRoutes from './route/user.routes';
import { Database } from './config/db.config2';


const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use('/api', userRoutes);

async function startApp() {
  try {
    const sequelizeConnection = new Database().connect();
    app.listen(port, () => {
      console.log(`Server has started on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();