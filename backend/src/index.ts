import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import logger from './utils/logger';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env['PORT'] || 5000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env['FRONTEND_URL'] || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env['RATE_LIMIT_WINDOW_MS'] || '900000'), // 15 minutes
  max: parseInt(process.env['RATE_LIMIT_MAX_REQUESTS'] || '100'), // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env['NODE_ENV'] !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Ahorra API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env['NODE_ENV'] || 'development',
  });
});

// API routes - Will be implemented next
const API_VERSION = process.env['API_VERSION'] || 'v1';

// TODO: Implement these routes
// app.use(`/api/${API_VERSION}/auth`, authRoutes);
// app.use(`/api/${API_VERSION}/users`, userRoutes);
// app.use(`/api/${API_VERSION}/accounts`, accountRoutes);
// app.use(`/api/${API_VERSION}/transactions`, transactionRoutes);
// app.use(`/api/${API_VERSION}/categories`, categoryRoutes);
// app.use(`/api/${API_VERSION}/budgets`, budgetRoutes);
// app.use(`/api/${API_VERSION}/dashboard`, dashboardRoutes);

// Temporary API endpoint for testing
app.get(`/api/${API_VERSION}/test`, (_req, res) => {
  res.json({
    success: true,
    message: 'Ahorra API is working!',
    version: API_VERSION,
  });
});

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

// Start server
const server = app.listen(PORT, () => {
  logger.info(`🚀 Ahorra API server running on port ${PORT}`);
  logger.info(`📊 Environment: ${process.env['NODE_ENV'] || 'development'}`);
  logger.info(`🌐 CORS enabled for: ${process.env['FRONTEND_URL'] || 'http://localhost:3000'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});

export default app;
