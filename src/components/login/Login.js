// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { SHA256 } from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import "./Login.scss"

const Login = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Invalid email format');
                return;
            }

            // Validate password format
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                setError('Password must be 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
                return;
            }

            // Convert password to sha256 format using crypto-js library
            const sha256Password = SHA256(password).toString();

            // Create FormData object and append login credentials
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', sha256Password);
            formData.append('grant_type', 'password');

            // Make a POST request to the login API with the authorization header
            const response = await axios.post(
                'https://apiv2stg.promilo.com/user/oauth/token',
                formData,
                {
                    headers: {
                        'Authorization': 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=='
                    }
                }
            );

            // Handle successful login
            console.log('Login successful', response.data);

            sessionStorage.setItem('accessToken', response.data.response.access_token);

            // Redirect to the product list page
            navigation('/product-list');
        } catch (error) {
            // Handle login error
            console.error('Login error', error);
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
