import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activity from './Components/Activity';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Introduction from './Components/Introduction';
import Strengths from './Components/Strengths';
import Values from './Components/Values';
import WritingPage from './Components/WritingPage';
import WritingListPage from './Components/WritingListPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="nav-links">
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
            <Route path="/" element={<>
              <Introduction />
              <Education />
              <Activity />
              <Strengths />
              <Values />
              <Contact />
            </>} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/postlist" element={<WritingListPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
