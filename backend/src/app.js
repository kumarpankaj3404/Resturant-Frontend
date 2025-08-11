import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
}))

app.use(express.json({limit: '1mb'}));

app.use(express.urlencoded({ extended: true, limit: '1mb' }));

app.use(cookieParser());


//Import routes
import userRoutes from './routes/user.route.js';
import menuRoutes from './routes/menu.route.js'


//Use routes
app.use('/api/v1/users', userRoutes);

app.use('/api/v1/menu', menuRoutes);


export default app;