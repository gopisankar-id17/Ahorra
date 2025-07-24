// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface UserRegister {
  email: string;
  password: string;
  name: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

// Transaction Types
export interface Transaction {
  id: string;
  userId: string;
  accountId: string;
  amount: number;
  category: string;
  description: string;
  transactionType: 'income' | 'expense';
  date: Date;
  createdAt: Date;
  paymentMethod?: string;
  notes?: string;
}

export interface CreateTransaction {
  accountId: string;
  amount: number;
  category: string;
  description: string;
  transactionType: 'income' | 'expense';
  date: Date;
}

// Account Types
export interface Account {
  id: string;
  userId: string;
  accountName: string;
  accountType: 'checking' | 'savings' | 'credit' | 'cash';
  balance: number;
  createdAt: Date;
}

export interface CreateAccount {
  accountName: string;
  accountType: 'checking' | 'savings' | 'credit' | 'cash';
  initialBalance: number;
}

// Budget Types
export interface Budget {
  id: string;
  userId: string;
  categoryId: string;
  amount: number;
  spent: number;
  month: number;
  year: number;
  createdAt: Date;
}

export interface CreateBudget {
  categoryId: string;
  amount: number;
  month: number;
  year: number;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  color: string;
  icon: string;
}

// Dashboard Types
export interface DashboardData {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsGoal?: number;
  currentSavings?: number;
  recentTransactions: Transaction[];
  categorySpending?: {
    category: string;
    amount: number;
    color: string;
  }[];
  budgetProgress?: {
    category: string;
    budgeted: number;
    spent: number;
    remaining: number;
  }[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Auth Types
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface TransactionFormData {
  amount: string;
  category: string;
  description: string;
  transactionType: 'income' | 'expense';
  date: string;
  accountId: string;
}
