import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
connectDB();
let port = process.env.PORT || 5000;
let app = express();


app.use("/api/auth", authRouter);

app.listen(port, () => {
    
  console.log(`Server is running on http://localhost:${port}`);

});