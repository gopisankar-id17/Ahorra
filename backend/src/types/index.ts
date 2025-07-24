import { Request } from 'express';

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserInput {
  email: string;
  name: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

// Transaction Types
export interface Transaction {
  id: string;
  user_id: string;
  account_id: string;
  amount: number;
  category_id: string;
  description: string;
  transaction_type: 'income' | 'expense';
  date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface CreateTransactionInput {
  account_id: string;
  amount: number;
  category_id: string;
  description: string;
  transaction_type: 'income' | 'expense';
  date: Date;
}

export interface UpdateTransactionInput {
  amount?: number;
  category_id?: string;
  description?: string;
  transaction_type?: 'income' | 'expense';
  date?: Date;
}

// Account Types
export interface Account {
  id: string;
  user_id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'cash';
  balance: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateAccountInput {
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'cash';
  initial_balance: number;
}

export interface UpdateAccountInput {
  name?: string;
  type?: 'checking' | 'savings' | 'credit' | 'cash';
}

// Category Types
export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  color: string;
  icon: string;
  created_at: Date;
}

// Budget Types
export interface Budget {
  id: string;
  user_id: string;
  category_id: string;
  amount: number;
  month: number;
  year: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateBudgetInput {
  category_id: string;
  amount: number;
  month: number;
  year: number;
}

export interface UpdateBudgetInput {
  amount?: number;
  month?: number;
  year?: number;
}

// Auth Types
export interface AuthTokenPayload {
  userId: string;
  email: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthTokenPayload;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Record<string, string>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Dashboard Types
export interface DashboardData {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  recentTransactions: Transaction[];
  categorySpending: {
    category: string;
    amount: number;
    color: string;
  }[];
  budgetProgress: {
    category: string;
    budgeted: number;
    spent: number;
    remaining: number;
  }[];
}

// Database Types
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

// Query Types
export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export interface TransactionQuery extends PaginationQuery {
  account_id?: string;
  category_id?: string;
  transaction_type?: 'income' | 'expense';
  start_date?: Date;
  end_date?: Date;
  search?: string;
}

export interface BudgetQuery {
  month?: number;
  year?: number;
}

// Error Types - Removed AppError interface since it's now a class in errorHandler.ts
export interface ServiceResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

// File Upload Types
export interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
}
