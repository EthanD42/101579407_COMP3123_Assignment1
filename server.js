import express from 'express';
import 'dotenv/config';
import './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
app.use(express.json());
app.use(helmet());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(morgan('dev'));
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);
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