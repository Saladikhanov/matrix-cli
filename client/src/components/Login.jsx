import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/slices/loginSlice";


const Login = () => {
    const [username, setUserName] = useState('');
    const dispatch = useDispatch();
    const [caret, setCaret] = useState('|');
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = () => {
        if (username) {
            dispatch(loginUser(username));
        } else {
            showErrorMessage('enter user_name');
        }

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (username) {
                handleLogin();
            }else {
                showErrorMessage('enter user_name');
            }
        }
    };

    const showErrorMessage = (message) => {
        let currentMessage = '';
        for (let i = 0; i < message.length; i++) {
            setTimeout(() => {
                currentMessage += message.charAt(i);
                setErrorMessage(currentMessage);
            }, i * 50);
        }
    };

    useEffect(() => {
        if (username) {
            setErrorMessage('');
        }
    }, [username]);
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <div className="input-container">
                    <input
                        placeholder="user_name"
                        className="matrix-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <div className="caret">{caret}</div>
                    <button className="matrix-button" onClick={handleLogin} data-testid="login-button">[enter]</button>

                </div>
                    <div className="error-message">{errorMessage}</div>

            </div>

        </div>
    );
};

export default Login;