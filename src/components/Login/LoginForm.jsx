import React from 'react'
import { StyledButton, StyledForm } from '../SharedStyles/SharedStyles'

export default function LoginForm(props) {
    return (
        <StyledForm>
            <ul>
                <li>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={props.setEmail}
                        onChange={props.onChange}
                        placeholder="Enter your email"
                    />
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={props.setPassword}
                        onChange={props.onChange}
                        placeholder="Enter your password"
                    />
                </li>
                <li>
                    <StyledButton onClick={props.handleLoginUser}>Login</StyledButton>
                </li>
            </ul>
            <p>{props.loginStatus && props.loginStatus}</p>
        </StyledForm>
    )
}
