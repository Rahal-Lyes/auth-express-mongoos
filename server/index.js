import express from 'express'
import dotenv from 'dotenv';
import {connectDb} from './db/connectMongo.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();

app.express(json());
app.use('/api/auth', authRoutes);
const PORT=3000;
app.listen(PORT, () => {
  connectDb();
  console.log("Server running on port: http://localhost:" + PORT);
})