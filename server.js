// packages
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRouts from './src/routes/userRouts.js';
import courseRoute from './src/routes/coursRoute.js';
import employerRoute from './src/routes/EmployerRoute.js';

// utils
import connectDB from './src/config/db.js';
connectDB();

const app = express();

// Middleware to parse cookie
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRouts);
app.use('/api/v1/cours', courseRoute);
app.use('/api/v1/employer', employerRoute);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`server is running on port ${port}...`));
