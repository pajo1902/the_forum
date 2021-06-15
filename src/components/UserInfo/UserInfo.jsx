import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import AuthKit from '../../data/AuthKit';

export default function UserInfo(props) {
    const { userData } = useContext(UserContext);

    function charToUpperCase(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        
        <li>
            { props.log == false ?
            <>
                <p>You are not logged in</p>
            </> : 
            <>
                <p>Logged in as:</p>
                <p>{userData && charToUpperCase(userData.firstName)}</p>
                <p>{userData && charToUpperCase(userData.lastName)}</p>
            </>
            }
        </li>
    )
}
