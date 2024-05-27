import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction';
import WritingPage from './components/WritingPage';
import WritingListPage from './components/WritingListPage';
import WritingDetail from './components/WritingDetail';

function App() {
  const [writings, setWritings] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const handleNewPost = (newPost) => {
    setWritings([...writings, { id: writings.length + 1, ...newPost }]);
  };

  const handleUpdatePost = (updatedPost) => {
    const updatedWritings = writings.map(post => (post.id === updatedPost.id ? updatedPost : post));
    setWritings(updatedWritings);
  };

  const handleDeletePost = (postId) => {
    const updatedWritings = writings.filter(post => post.id !== postId);
    setWritings(updatedWritings);
  };

  const handleEditPost = (post) => {
    setCurrentPost(post);
  };

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
                <Link to="/writing" className="nav-link" onClick={() => setCurrentPost(null)}>📃</Link>
              </li>
              <li>
                <Link to="/postlist" className="nav-link">📚</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/writing" element={<WritingPage onAdd={handleNewPost} onUpdate={handleUpdatePost} currentPost={currentPost} />} />
            <Route path="/postlist" element={<WritingListPage writings={writings} onDelete={handleDeletePost} onEdit={handleEditPost} />} />
            <Route path="/post/:id" element={<WritingDetail writings={writings} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
