import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';
import logger from '../utils/logger';

// Custom error class for operational errors
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintain proper stack trace for where our error was thrown
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: AppError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error('Error caught by error handler:', {
    error: err.message,
    stack: err.stack,
    url: _req.url,
    method: _req.method,
    ip: _req.ip,
    userAgent: _req.get('User-Agent'),
  });

  // Default error values
  let statusCode = 500;
  let message = 'Internal Server Error';
  let isOperational = false;

  // Handle operational errors
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    isOperational = err.isOperational;
  }

  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
  }

  if (err.name === 'UnauthorizedError' || err.message.includes('jwt')) {
    statusCode = 401;
    message = 'Unauthorized';
  }

  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID format';
  }

  if (err.message.includes('duplicate key')) {
    statusCode = 409;
    message = 'Resource already exists';
  }

  // Prepare error response
  const errorResponse: ApiResponse = {
    success: false,
    message: isOperational ? message : 'Something went wrong',
  };

  // Add error details in development
  if (process.env['NODE_ENV'] === 'development') {
    errorResponse.error = err.message;
    (errorResponse as any).stack = err.stack;
  }

  res.status(statusCode).json(errorResponse);
};

// Helper functions for common errors
export const createNotFoundError = (resource: string): AppError => {
  return new AppError(`${resource} not found`, 404);
};

export const createValidationError = (message: string): AppError => {
  return new AppError(message, 400);
};

export const createUnauthorizedError = (message: string = 'Unauthorized'): AppError => {
  return new AppError(message, 401);
};

export const createForbiddenError = (message: string = 'Forbidden'): AppError => {
  return new AppError(message, 403);
};

export const createConflictError = (message: string): AppError => {
  return new AppError(message, 409);
};
