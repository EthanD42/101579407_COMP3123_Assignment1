import express from 'express';
import 'dotenv/config';
import './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';

const app = express();
app.use(express.json());
app.use('/api/v1/user', userRoutes);
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/v1/user/protected', authenticateToken, (req, res) => {
    res.json({
        message: 'You are authenticated',
        user: req.user
    });
});








app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});