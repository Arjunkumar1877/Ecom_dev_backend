import connectDB from './config/database/Database';
import app from './app';

connectDB();

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
