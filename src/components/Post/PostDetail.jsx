import React, { useContext, useEffect } from 'react'
import { StyledDetail, StyledAuthor } from './PostStyles';
import { CountriesContext } from '../../contexts/CountriesContext'
import AuthKit from '../../data/AuthKit';
import dateFormat from 'dateformat';

export default function PostDetail(props) {

    const { allCountriesData, setAllCountriesData } = useContext(CountriesContext);

    const formatedCreatedAt = dateFormat(props.postItem.createdAt, "mmmm dS, yyyy HH:MM");
    const formatedUpdatedAt = dateFormat(props.postItem.updatedAt, "mmmm dS, yyyy HH:MM");

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
        getCountries();
    }, []);

    function checkCountries(number) {
        let country;
        allCountriesData && allCountriesData.map((countryItem, index) => {
            if(countryItem.id == number) {
                country = countryItem.title;
            }
        });
        return country;
    }

    return (
        <StyledDetail>
            <h2>{!props.postItem.title ? "No title" : props.postItem.title}</h2>
            <p>Content: {props.postItem.content}</p>
            <p>Category: {props.postItem.category}</p>
            <p>Created at: {formatedCreatedAt}</p>
            <p>Updated at: {formatedUpdatedAt}</p>
            <p>Replies: {props.postItem.countResponses}</p>
            <p>Country: {checkCountries(props.postItem.country)}</p>
            <p>Id: {props.postItem.id}</p>
            <p>Latest reply author: {!props.postItem.latestResponseAuthor ? "Don't know" : props.postItem.latestResponseAuthor}</p>
            <p>Are you following this post?: {props.postItem.userSubscribed == false ? "No" : "Yes"}</p>
            <p>Post closed for replies?: {props.postItem.isClosed == false || !props.postItem.isClosed ? "No" : "Yes"}</p>
            <p>Is the post pinned?: {props.postItem.isPinned == false ? "No" : "Yes"}</p>
            <p>Views: {!props.postItem.viewCount ? "Don't know" : props.postItem.viewCount}</p>
            
            <StyledAuthor>
                <h3>Author</h3>
                <p>Name: {!props.postItem.author?.firstName ? "Unknown" : props.postItem.author.firstName} {!props.postItem.author?.lastName ? "Unknown" : props.postItem.author.lastName}</p>
                <p>Email: {!props.postItem.author?.email ? "Unknown" : props.postItem.author.email}</p>
                <p>Country: {!props.postItem.author?.country ? "Unknown" : checkCountries(props.postItem.author.country)}</p>
                <p>Id: {!props.postItem.author?.id ? "Unknown" : props.postItem.author.id}</p>
                <p>Phone number: {!props.postItem.author?.phoneNumber ? "Unknown" : props.postItem.author.phoneNumber}</p>
                <p>Title: {!props.postItem.author?.title ? "Unknown" : props.postItem.author.title}</p>
            </StyledAuthor>
        </StyledDetail>
    )
}
