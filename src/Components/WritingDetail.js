import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './WritingDetail.css';

const WritingDetail = () => {
  const { id } = useParams();
  const [writing, setWriting] = useState(null);

  useEffect(() => {
    const fetchWriting = async () => {
      try {
        const response = await fetch(`/api/blog/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setWriting(data);
      } catch (error) {
        console.error('Error fetching writing', error);
      }
    };

    fetchWriting();
  }, [id]);

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
