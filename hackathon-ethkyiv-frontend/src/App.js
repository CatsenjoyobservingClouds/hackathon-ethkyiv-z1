import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CryptoAccountPage from './pages/CryptoAccountPage.js';
import BorrowHistoryPage from './pages/BorrowHistoryPage.js';
import VaultDetailsPage from './pages/VaultDetailsPage.js';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Crypto Account
              </NavLink>
            </li>
            <li>
              <NavLink to="/borrow-history" activeClassName="active">
                Borrow History
              </NavLink>
            </li>
            <li>
              <NavLink to="/vault-details" activeClassName="active">
                Vault Details
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CryptoAccountPage />} />
          <Route path="/borrow-history" element={<BorrowHistoryPage />} />
          <Route path="/vault-details" element={<VaultDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
