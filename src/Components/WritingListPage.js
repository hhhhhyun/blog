import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './WritingListPage.css';

const WritingListPage = ({ writings, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleEdit = (writing) => {
    onEdit(writing);
    navigate('/writing');
  };

  return (
    <div className="writing-list-page">
      <h3>글목록</h3>
      <ul className="post-list">
        {writings.map(writing => (
          <li key={writing.id}>
            <Link to={`/post/${writing.id}`} className="post-link">
              <strong>{writing.title}</strong> by {writing.user}
            </Link>
            <div className="post-buttons">
              <button onClick={() => handleEdit(writing)} className="post-edit-button">수정</button>
              <button onClick={() => onDelete(writing.id)} className="post-delete-button">삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WritingListPage;
