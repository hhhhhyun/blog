import React from 'react';
import { useLocation } from 'react-router-dom';
import './WritingDetail.css';

const WritingDetail = ({ writings }) => {
  const location = useLocation();
  const id = location.pathname.split('/').pop(); // 경로에서 id 추출
  const writing = writings.find(writing => writing.id === parseInt(id, 10)); // id에 해당하는 글 찾기

  if (!writing) {
    return <div className="writing-detail">No writing found.</div>;
  }

  const { user, title, body } = writing;

  return (
    <div className="writing-detail">
      <h3>{title}</h3>
      <p><strong>by</strong> {user}</p>
      <p>{body}</p>
    </div>
  );
};

export default WritingDetail;
