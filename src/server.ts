import express, { Application } from 'express';
import connectDB from './config/database/Database';
import app from './app';



// Connect to the database
connectDB();

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
