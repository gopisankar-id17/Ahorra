import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AuthPage } from './components/Auth/AuthPage';
import { useAuth } from './hooks/useAuth';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      {isAuthenticated ? <Dashboard /> : <AuthPage />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
