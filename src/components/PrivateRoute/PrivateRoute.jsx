import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function PrivateRoutes({ component: Component, ...rest }) {
    const { auth } = useContext(AuthContext);

    return (
        <Route 
            {...rest}
            render = {props => (
                auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login'/>
                )
            )}
        />
            
    )
}
