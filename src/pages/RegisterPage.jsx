import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../components/Register/RegisterForm';
import { StyledCenterContainer } from '../components/SharedStyles/SharedStyles';
import AuthKit from '../data/AuthKit'

export default function RegisterPage() {
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: ""
    });

    const [ registerStatus, setRegisterStatus ] = useState('');

    const history = useHistory();

    function handleCreateUser() {
        const payload = formData;
        const authKit = new AuthKit();

        authKit.register(payload)
        .then(res => {
            res.json()
            if(res.status === 400) {
                setRegisterStatus("Couldn't register");
            } else {
                history.push('/login');
            }
        });
    }

    function handleInputOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <StyledCenterContainer>
            <h1>Register Page</h1>
            <RegisterForm
                onChange={handleInputOnChange}
                setFirstName={formData["firstName"]}
                setLastName={formData["lastName"]}
                setEmail={formData["email"]}
                setPassword={formData["password"]}
                setCountry={formData["country"]}
                handleCreateUser={handleCreateUser}
                registerStatus={registerStatus}
            />
        </StyledCenterContainer>
    )
}
