import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm'
import AuthKit from '../data/AuthKit';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import { StyledCenterContainer } from '../components/SharedStyles/SharedStyles';

export default function LoginPage() {
    const { setAuth } = useContext(AuthContext);
    const { userData, setUserData } = useContext(UserContext);

    let history = useHistory();

    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    const [ loginStatus, setLoginStatus ] = useState('');

    function handleLoginUser() {
        const payload = formData;
        const authKit = new AuthKit();

        authKit.login(payload)
        .then(res => res.json())
        .then(data => {
            if(data.token) {
                authKit.setToken(data.token);
                setAuth(true);
                authKit.getUser()
                .then(res => res.json())
                .then(data => {
                    setUserData(data);
                });

                history.push('/');
            } else {
                setLoginStatus('Unable to log in with provided credentials!');
            }
        });
    }

    function handleInputOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <StyledCenterContainer>
            <h1>Login Page</h1>
            <LoginForm
                onChange={handleInputOnChange}
                setEmail={formData["email"]}
                setPassword={formData["password"]}
                handleLoginUser={handleLoginUser}
                loginStatus={loginStatus}
            />
        </StyledCenterContainer>
    );
}
