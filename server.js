import express from 'express';
import 'dotenv/config';
import './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import employeeRoutes from './routes/employeeRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(helmet());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // this is 15 minutes
    max: 100
});

const accessLogStream = fs.createWriteStream('logs/access.log', { flags: 'a' });

app.use(limiter);
app.use(morgan('combined', { stream: accessLogStream }));
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000;


app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});










app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});