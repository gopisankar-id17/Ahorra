import React, { useState, useEffect } from 'react';
import { DashboardData } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    // Simulate loading dashboard data
    const timer = setTimeout(() => {
      setDashboardData({
        totalBalance: 4250.00,
        monthlyIncome: 5200.00,
        monthlyExpenses: 2150.00,
        savingsGoal: 10000.00,
        currentSavings: 6750.00,
        recentTransactions: [
          {
            id: '1',
            userId: '1',
            accountId: '1',
            amount: 3200.00,
            category: 'Salary',
            description: 'Monthly salary deposit',
            transactionType: 'income',
            date: new Date('2025-01-24'),
            createdAt: new Date('2025-01-24'),
            paymentMethod: 'Bank Transfer',
            notes: 'Monthly salary deposit'
          },
          {
            id: '2',
            userId: '1',
            accountId: '1',
            amount: -156.50,
            category: 'Groceries',
            description: 'Weekly grocery shopping',
            transactionType: 'expense',
            date: new Date('2025-01-23'),
            createdAt: new Date('2025-01-23'),
            paymentMethod: 'Credit Card',
            notes: 'Weekly grocery shopping'
          },
          {
            id: '3',
            userId: '1',
            accountId: '1',
            amount: -45.00,
            category: 'Transportation',
            description: 'Gas station fill-up',
            transactionType: 'expense',
            date: new Date('2025-01-22'),
            createdAt: new Date('2025-01-22'),
            paymentMethod: 'Debit Card',
            notes: 'Gas station fill-up'
          },
          {
            id: '4',
            userId: '1',
            accountId: '1',
            amount: -89.99,
            category: 'Entertainment',
            description: 'Movie tickets and dinner',
            transactionType: 'expense',
            date: new Date('2025-01-21'),
            createdAt: new Date('2025-01-21'),
            paymentMethod: 'Credit Card',
            notes: 'Movie tickets and dinner'
          },
          {
            id: '5',
            userId: '1',
            accountId: '1',
            amount: -120.00,
            category: 'Utilities',
            description: 'Monthly electricity bill',
            transactionType: 'expense',
            date: new Date('2025-01-20'),
            createdAt: new Date('2025-01-20'),
            paymentMethod: 'Auto Pay',
            notes: 'Monthly electricity bill'
          }
        ]
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading your dashboard...</div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const userInitials = user?.email ? user.email.substring(0, 2).toUpperCase() : 'U';

  return (
    <div className="dashboard">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">💰</span>
            <span>Ahorra</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Main</div>
            <button 
              className={`nav-item ${activeSection === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveSection('dashboard')}
            >
              <span className="nav-icon">📊</span>
              Dashboard
            </button>
            <button 
              className={`nav-item ${activeSection === 'transactions' ? 'active' : ''}`}
              onClick={() => setActiveSection('transactions')}
            >
              <span className="nav-icon">💳</span>
              Transactions
            </button>
            <button 
              className={`nav-item ${activeSection === 'budgets' ? 'active' : ''}`}
              onClick={() => setActiveSection('budgets')}
            >
              <span className="nav-icon">🎯</span>
              Budgets
            </button>
            <button 
              className={`nav-item ${activeSection === 'goals' ? 'active' : ''}`}
              onClick={() => setActiveSection('goals')}
            >
              <span className="nav-icon">🏆</span>
              Goals
            </button>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Insights</div>
            <button 
              className={`nav-item ${activeSection === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveSection('reports')}
            >
              <span className="nav-icon">📈</span>
              Reports
            </button>
            <button 
              className={`nav-item ${activeSection === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveSection('analytics')}
            >
              <span className="nav-icon">📋</span>
              Analytics
            </button>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Account</div>
            <button 
              className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveSection('settings')}
            >
              <span className="nav-icon">⚙️</span>
              Settings
            </button>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">{userInitials}</div>
            <div className="user-info">
              <div className="user-name">{user?.name || 'User'}</div>
              <div className="user-email">{user?.email}</div>
            </div>
            <button className="logout-btn" onClick={logout} title="Logout">
              🚪
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-top">
            <h1 className="welcome-message">
              Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'}, {user?.name || 'there'}! 👋
            </h1>
            <div className="header-date">{currentDate}</div>
          </div>
          
          <div className="cta-buttons">
            <button className="cta-btn primary">
              <span>➕</span>
              Add Expense
            </button>
            <button className="cta-btn secondary">
              <span>📊</span>
              View Reports
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-grid">
            {/* Spending Insights Card */}
            <div className="insights-card">
              <div className="card-header">
                <h2 className="card-title">Spending Insights</h2>
                <select className="card-period">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>This Year</option>
                </select>
              </div>
              
              <div className="insights-chart">
                <div className="chart-bars">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '45%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                  <div className="chart-bar" style={{height: '55%'}}></div>
                  <div className="chart-bar" style={{height: '85%'}}></div>
                </div>
              </div>

              <div className="insights-summary">
                <div className="summary-item">
                  <div className="summary-value">$2,150</div>
                  <div className="summary-label">This Month</div>
                </div>
                <div className="summary-item">
                  <div className="summary-value">-12%</div>
                  <div className="summary-label">vs Last Month</div>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="stats-card">
              <div className="card-header">
                <h2 className="card-title">Quick Stats</h2>
              </div>
              
              <div className="stats-list">
                <div className="stat-item">
                  <div className="stat-icon">💰</div>
                  <div className="stat-content">
                    <div className="stat-value">${dashboardData?.totalBalance.toLocaleString()}</div>
                    <div className="stat-label">Total Balance</div>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">📈</div>
                  <div className="stat-content">
                    <div className="stat-value">${dashboardData?.monthlyIncome.toLocaleString()}</div>
                    <div className="stat-label">Monthly Income</div>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-content">
                    <div className="stat-value">68%</div>
                    <div className="stat-label">Savings Goal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="transactions-section">
            <div className="section-header">
              <h2 className="section-title">Recent Transactions</h2>
              <button className="view-all-btn">View All</button>
            </div>
            
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData?.recentTransactions.map(transaction => (
                  <tr key={transaction.id} className="transaction-row">
                    <td className="transaction-date">
                      {new Date(transaction.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </td>
                    <td className="transaction-category">
                      <div className="category-icon">
                        {transaction.transactionType === 'income' ? '💰' : 
                         transaction.category === 'Groceries' ? '🛒' :
                         transaction.category === 'Transportation' ? '🚗' :
                         transaction.category === 'Entertainment' ? '🎬' :
                         transaction.category === 'Utilities' ? '⚡' : 
                         transaction.category === 'Salary' ? '💼' : '💳'}
                      </div>
                      <span className="category-name">{transaction.category}</span>
                    </td>
                    <td className={`transaction-amount ${transaction.amount > 0 ? 'amount-positive' : 'amount-negative'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </td>
                    <td className="payment-method">{transaction.paymentMethod || 'N/A'}</td>
                    <td className="transaction-notes">{transaction.notes || transaction.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
