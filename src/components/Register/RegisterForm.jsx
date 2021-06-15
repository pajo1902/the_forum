import React, { useState, useEffect, useContext } from 'react'
import AuthKit from '../../data/AuthKit';
import { CountriesContext } from '../../contexts/CountriesContext';
import { StyledForm, StyledButton } from '../SharedStyles/SharedStyles';

export default function RegisterForm(props) {
    const { allCountriesData, setAllCountriesData } = useContext(CountriesContext);
    
    function getCountries() {
        if(!allCountriesData) {
            const authKit = new AuthKit();
        
            authKit.getCountries()
            .then(res => res.json())
            .then(data => {
                setAllCountriesData(data.results)
            });     
        }
    }

    useEffect(() => {
		getCountries()
	}, [])

    return (
        <StyledForm>
        
            <ul className="flexOuter">
                <li>
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={props.setFirstName}
                        onChange={props.onChange}
                        placeholder="Enter your firstname"
                    />
                </li>
                <li>
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={props.setLastName}
                        onChange={props.onChange}
                        placeholder="Enter your lastname"
                    />
                </li>
                <li>
                    <label htmlFor="email">email</label>
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
                        placeholder="Enter a password"
                    />
                </li>
                <li>
                    <label htmlFor="countries">Choose a country:</label>
                    <select onChange={props.onChange} name="country">
                        <option>Country</option>
                        {allCountriesData && allCountriesData.map((countryItem, index) => {
                            return (
                                <option key={index} value={countryItem.id}>{countryItem.title}</option>
                            )
                        })}
                    </select>
                </li>
                <li>
                    <StyledButton onClick={props.handleCreateUser}>Create</StyledButton>
                </li>
            </ul>
            <p>{props.registerStatus && props.registerStatus}</p>
        </StyledForm>
    )
}
