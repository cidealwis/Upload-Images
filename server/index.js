import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import {UserRouter} from "./routes/userRoutes.js"


import "./db/mongoose.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('public')); // Automatically load images in the browser via URL

app.use("/user",UserRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
