import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WritingPage.css';

const WritingPage = ({ onAdd, onUpdate, currentPost }) => {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPost) {
      setUser(currentPost.user);
      setTitle(currentPost.title);
      setBody(currentPost.body);
    } else {
      setUser('');
      setTitle('');
      setBody('');
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      onUpdate({ ...currentPost, user, title, body });
    } else {
      onAdd({ user, title, body });
    }
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      navigate('/postlist');
    }, 2000);
  };

  return (
    <div className="writing-page">
      <h2>{currentPost ? 'Edit Post' : '글쓰기'}</h2>
      {showMessage && <div className="message">저장되었습니다!</div>} {/* 저장 메시지 표시 */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="이름을 입력하세요."
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="내용을 입력하세요."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default WritingPage;
