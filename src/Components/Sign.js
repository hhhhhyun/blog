import React, { useState, useEffect } from 'react';
import './Sign.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { getCookie, removeCookie } from '../Cookies';
import { useNavigate } from 'react-router-dom';
import apiCall from './api';

const Sign = ({ onLogout }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getCookie("token");
        setIsAuthenticated(!!token);
    }, []);

    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };

    const logout = async () => {
        try {
            const token = getCookie("token");
            await apiCall.post('/dj/logout/', null, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            removeCookie("token");
            setIsAuthenticated(false);
            onLogout();
            navigate('/login');
        } catch (error) {
            console.error('로그아웃 실패', error);
        }
    };

    return (
        <div className="sign-page">
            {isAuthenticated ? (
                <div>
                    <h2>Sign out</h2>
                    <button onClick={logout}>Sign out</button>
                </div>
            ) : (
                <>
                    {isLogin ? <SignIn onLogin={() => setIsAuthenticated(true)} /> : <SignUp />}
                    <div className="auth-toggle">
                        <button onClick={toggleAuth}>
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Sign;
