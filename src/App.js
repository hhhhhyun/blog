import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction';
import WritingPage from './components/WritingPage';
import WritingListPage from './components/WritingListPage';
import WritingDetail from './components/WritingDetail';
import Sign from './components/Sign';
import { getCookie, removeCookie } from './Cookies';

function App() {
  const isAuthenticated = !!getCookie("token");

  const handleAuthClick = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      removeCookie("token");
    }
    window.location.href = '/login';
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to={isAuthenticated ? "/" : "/login"} onClick={handleAuthClick} className="nav-link">
                {isAuthenticated ? '🔓' : '🔐'}
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">👩🏻‍💻</Link>
            </li>
            <li>
              <Link to="/writing" className="nav-link">📃</Link>
            </li>
            <li>
              <Link to="/postlist" className="nav-link">📚</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <Routes>
          <Route path="/login" element={<Sign />} />
          <Route path="/" element={<Introduction />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/postlist" element={<WritingListPage />} />
          <Route path="/writingdetail/:id" element={<WritingDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
