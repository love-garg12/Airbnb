import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import cors from 'cors';
import listingRouter from './routes/listing.route.js';

dotenv.config();
connectDB();
let port = process.env.PORT || 8000;
let app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);
  
app.listen(port, () => {
    
  console.log(`Server is running on http://localhost:${port}`);

});