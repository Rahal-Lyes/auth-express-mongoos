import express from 'express'
import dotenv from 'dotenv';
import {connectDb} from './db/connectMongo.js';
import authRoutes from './routes/auth.routes.js';
const app=express();
const PORT=3000;

dotenv.config();

app.get('/',(req,res)=>{
  res.send('Hello');
})
app.use('/api/auth', authRoutes);
app.listen(PORT,()=>{
  connectDb();
  console.log("Server running in port: http:\\localhost:"+PORT);
})