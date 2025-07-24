import React, { useState, useEffect } from 'react';
import { DashboardData, Transaction } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    // Mock dashboard data for now
    const mockData: DashboardData = {
      totalBalance: 5420.50,
      monthlyIncome: 3500.00,
      monthlyExpenses: 2180.30,
      recentTransactions: [
        {
          id: '1',
          userId: '1',
          accountId: '1',
          amount: -45.20,
          category: 'Food',
          description: 'Grocery shopping',
          transactionType: 'expense',
          date: new Date('2025-07-23'),
          createdAt: new Date('2025-07-23'),
        },
        {
          id: '2',
          userId: '1',
          accountId: '1',
          amount: 3500.00,
          category: 'Salary',
          description: 'Monthly salary',
          transactionType: 'income',
          date: new Date('2025-07-01'),
          createdAt: new Date('2025-07-01'),
        },
      ],
      categorySpending: [
        { category: 'Food', amount: 450.80, color: '#FF6384' },
        { category: 'Transport', amount: 320.50, color: '#36A2EB' },
        { category: 'Entertainment', amount: 180.00, color: '#FFCE56' },
        { category: 'Bills', amount: 1229.00, color: '#4BC0C0' },
      ],
      budgetProgress: [
        { category: 'Food', budgeted: 500, spent: 450.80, remaining: 49.20 },
        { category: 'Transport', budgeted: 400, spent: 320.50, remaining: 79.50 },
        { category: 'Entertainment', budgeted: 200, spent: 180.00, remaining: 20.00 },
      ],
    };

    setTimeout(() => {
      setDashboardData(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner">Loading dashboard...</div>
      </div>
    );
  }

  if (!dashboardData) {
    return <div className="dashboard-error">Failed to load dashboard data</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back, {user?.name}!</h1>
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Balance Overview */}
        <section className="balance-section">
          <div className="balance-card">
            <h2>Total Balance</h2>
            <p className="balance-amount">${dashboardData.totalBalance.toFixed(2)}</p>
          </div>
          <div className="income-expense-cards">
            <div className="card income-card">
              <h3>Monthly Income</h3>
              <p className="amount income">${dashboardData.monthlyIncome.toFixed(2)}</p>
            </div>
            <div className="card expense-card">
              <h3>Monthly Expenses</h3>
              <p className="amount expense">${dashboardData.monthlyExpenses.toFixed(2)}</p>
            </div>
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="transactions-section">
          <h2>Recent Transactions</h2>
          <div className="transactions-list">
            {dashboardData.recentTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-info">
                  <span className="transaction-category">{transaction.category}</span>
                  <span className="transaction-description">{transaction.description}</span>
                </div>
                <div className={`transaction-amount ${transaction.transactionType}`}>
                  {transaction.transactionType === 'income' ? '+' : '-'}
                  ${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Budget Progress */}
        <section className="budget-section">
          <h2>Budget Progress</h2>
          <div className="budget-list">
            {dashboardData.budgetProgress.map((budget) => (
              <div key={budget.category} className="budget-item">
                <div className="budget-header">
                  <span className="budget-category">{budget.category}</span>
                  <span className="budget-amounts">
                    ${budget.spent.toFixed(2)} / ${budget.budgeted.toFixed(2)}
                  </span>
                </div>
                <div className="budget-progress-bar">
                  <div
                    className="budget-progress-fill"
                    style={{
                      width: `${Math.min((budget.spent / budget.budgeted) * 100, 100)}%`,
                      backgroundColor: budget.spent > budget.budgeted ? '#ff4757' : '#2ed573',
                    }}
                  ></div>
                </div>
                <span className="budget-remaining">
                  ${budget.remaining.toFixed(2)} remaining
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn primary">Add Transaction</button>
            <button className="action-btn secondary">View All Transactions</button>
            <button className="action-btn secondary">Manage Budgets</button>
            <button className="action-btn secondary">Add Account</button>
          </div>
        </section>
      </div>
    </div>
  );
};
