import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WritingListPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blog/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="writing-list-page">
      <h3>글목록</h3>
      <ul className="post-list">
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/post/${blog.id}`} className="post-link">
              <strong>{blog.title}</strong> by {blog.user}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WritingListPage;
