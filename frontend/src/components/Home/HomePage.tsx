import React, { useState } from 'react';
import { AuthPage } from '../Auth/AuthPage';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  if (showAuth) {
    return <AuthPage initialMode={authMode} onBack={() => setShowAuth(false)} />;
  }

  const handleGetStarted = () => {
    setAuthMode('register');
    setShowAuth(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuth(true);
  };

  return (
    <div className="home-page">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">💰</span>
            <span className="logo-text">Ahorra</span>
          </div>
          <div className="nav-buttons">
            <button className="btn-outline" onClick={handleLogin}>
              Login
            </button>
            <button className="btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Take Control of Your
              <span className="hero-highlight"> Financial Future</span>
            </h1>
            <p className="hero-description">
              Ahorra is your comprehensive personal finance management system. 
              Track expenses, set budgets, monitor investments, and achieve your financial goals with ease.
            </p>
            <div className="hero-buttons">
              <button className="btn-hero-primary" onClick={handleGetStarted}>
                Start Managing Money
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-hero-secondary" onClick={handleLogin}>
                I already have an account
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-card">
                <div className="card-header">
                  <div className="card-title">Monthly Overview</div>
                  <div className="card-amount">$4,250.00</div>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '45%'}}></div>
                    <div className="bar" style={{height: '90%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                  </div>
                </div>
              </div>
              <div className="preview-transactions">
                <div className="transaction-item">
                  <div className="transaction-icon income">+</div>
                  <div className="transaction-details">
                    <div className="transaction-name">Salary</div>
                    <div className="transaction-date">Today</div>
                  </div>
                  <div className="transaction-amount income">+$3,200</div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-icon expense">-</div>
                  <div className="transaction-details">
                    <div className="transaction-name">Groceries</div>
                    <div className="transaction-date">Yesterday</div>
                  </div>
                  <div className="transaction-amount expense">-$156</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">Everything you need to manage your money</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Smart Analytics</h3>
              <p className="feature-description">
                Get detailed insights into your spending patterns with interactive charts and reports.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Budget Tracking</h3>
              <p className="feature-description">
                Set budgets by category and get real-time alerts when you're approaching limits.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Bank-Level Security</h3>
              <p className="feature-description">
                Your financial data is protected with industry-standard encryption and security.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Multi-Platform</h3>
              <p className="feature-description">
                Access your finances from any device with our responsive web and mobile apps.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Real-Time Sync</h3>
              <p className="feature-description">
                Connect your bank accounts for automatic transaction import and categorization.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Investment Tracking</h3>
              <p className="feature-description">
                Monitor your portfolio performance and track your investment goals in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to start your financial journey?</h2>
          <p className="cta-description">
            Join thousands of users who have taken control of their finances with Ahorra.
          </p>
          <button className="btn-cta" onClick={handleGetStarted}>
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="logo-icon">💰</span>
            <span className="logo-text">Ahorra</span>
          </div>
          <div className="footer-text">
            © 2025 Ahorra. Made with ❤️ for better financial management.
          </div>
        </div>
      </footer>
    </div>
  );
};
