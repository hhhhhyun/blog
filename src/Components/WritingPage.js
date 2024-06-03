import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WritingPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/blog/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ title, body })
    });
    if (response.status === 201) {
      navigate('/postlist');
    }
  };

  return (
    <div className="writing-page">
      <h2>글쓰기</h2>
      <form onSubmit={handleSubmit}>
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
