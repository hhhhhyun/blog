import React, { useState } from 'react';
import apiCall from './api';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [nickname, setNickname] = useState('');
  const [university, setUniversity] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const signup = async () => {
    const data = {
      username,
      password1,
      password2,
      nickname,
      university,
      location,
    };
    try {
      const response = await apiCall.post('/dj/registration/', data);
      console.log('회원가입 완료', response.data);
      setUsername('');
      setPassword1('');
      setPassword2('');
      setNickname('');
      setUniversity('');
      setLocation('');
      setMessage('회원가입이 완료되었습니다. \n로그인 페이지로 이동합니다.');

      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        const errors = error.response.data;
        if (errors.username) setMessage(errors.username[0]);
        else if (errors.password1) setMessage(errors.password1[0]);
        else if (errors.non_field_errors) setMessage(errors.non_field_errors[0]);
        else setMessage('회원가입에 실패했습니다. \n다시 시도해주세요.');
      } else {
        setMessage('회원가입에 실패했습니다. \n다시 시도해주세요.');
      }
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      {message && <div className="message">{message}</div>}
      <div className="input-group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Password Confirm"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          placeholder="University"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Univ. Location"
        />
      </div>
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};

export default SignUp;
