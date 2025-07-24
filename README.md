# 💰 Ahorra - Personal Finance Management System

A comprehensive full-stack TypeScript application for managing personal finances, built with React and Node.js.

## 🌟 Features

### 🎯 Core Features (40% MVP)
- **User Authentication** - Secure registration and login
- **Transaction Management** - Add, edit, delete transactions
- **Budget Tracking** - Set and monitor budgets by category
- **Dashboard Overview** - Financial summary with charts
- **Account Management** - Multiple account support
- **Category Management** - Organize transactions

### 🚀 Advanced Features (Future)
- **Bank Integration** - Connect bank accounts via APIs
- **Investment Tracking** - Monitor portfolio performance
- **Bill Reminders** - Automated notifications
- **Reports & Analytics** - Detailed financial insights
- **Multi-currency Support** - International transactions
- **Mobile App** - React Native companion

## 🏗️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Modern CSS** with responsive design
- **Chart.js** for data visualization
- **React Context** for state management
- **Custom hooks** for reusable logic

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **PostgreSQL** database
- **JWT** authentication
- **bcrypt** for password hashing
- **Joi** for validation

### DevOps
- **Docker** for containerization
- **GitHub Actions** for CI/CD
- **ESLint** and **Prettier** for code quality

## 📁 Project Structure

```
ahorra/
├── frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json
├── backend/           # Node.js TypeScript backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   └── package.json
├── shared/            # Shared types and utilities
└── docker-compose.yml # Development environment
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gopisankar-id17/Ahorra.git
   cd Ahorra
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Backend environment
   cd backend
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Start the development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

5. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📊 Database Schema

### Core Tables
- **users** - User accounts and authentication
- **accounts** - User financial accounts
- **transactions** - Income and expense records
- **categories** - Transaction categories
- **budgets** - Budget allocations by category

## 🔐 Authentication

- **JWT-based authentication**
- **Password hashing** with bcrypt
- **Session management**
- **Password reset** functionality

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Transactions
- `GET /api/transactions` - Get user transactions
- `POST /api/transactions` - Create transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Dashboard
- `GET /api/dashboard/summary` - Get dashboard data
- `GET /api/dashboard/charts` - Get chart data

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

## 🐳 Docker Development

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Gopi Sankar** - [@gopisankar-id17](https://github.com/gopisankar-id17)

## 🔗 Links

- **Repository**: https://github.com/gopisankar-id17/Ahorra
- **Issues**: https://github.com/gopisankar-id17/Ahorra/issues
- **Discussions**: https://github.com/gopisankar-id17/Ahorra/discussions

---

**Made with ❤️ for better financial management**
