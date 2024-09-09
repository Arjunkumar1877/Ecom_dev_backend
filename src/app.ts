import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user/userRoutes';
import adminRoutes from './routes/admin/adminRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

//Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

//Error handling mddleware
app.use(errorHandler);

export default app;