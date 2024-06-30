import React, { useState, useEffect } from 'react';
import apiCall from './api';
import { setCookie } from '../Cookies';
import './SignIn.css';
import axios from 'axios';

const SignIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const buttonWidth = document.querySelector('.auth-form button').offsetWidth;
    const inputElements = document.querySelectorAll('.auth-form input');
    inputElements.forEach((input) => {
      input.style.width = `${buttonWidth}px`;
    });
  }, []);

  const login = async () => {
    const data = {
      username: username,
      password: password
    };
    try {
      const response = await apiCall.post('/dj/login/', data);
      console.log('로그인 완료', response.data);
      setUsername('');
      setPassword('');
      localStorage.setItem("token", response.data.access);
      onLogin();
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        const errors = error.response.data;
        if (errors.non_field_errors) setMessage(errors.non_field_errors[0]);
        else setMessage('로그인에 실패했습니다. 다시 시도해주세요.');
      } else {
        setMessage('로그인에 실패했습니다. 다시 시도해주세요.');
      }
    }
  }

  return (
    <div className="auth-form">
      <h2>Sign In</h2>
      {message && <div className="message">{message}</div>}
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button onClick={login}>Sign In</button>
    </div>
  )
}

export default SignIn;
