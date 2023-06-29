import express, { Express } from 'express';
import { Database } from './config/db.config2';
import userRoutes from './route/user.routes';
import taskRouter from './route/task.routes';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './config/swagger.json';


const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', taskRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function startApp() {
  try {
    await new Database().connect();
    app.listen(port, () => {
      console.log(`Server has started on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();