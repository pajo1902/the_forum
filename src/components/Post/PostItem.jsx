import React from 'react'
import { Link } from 'react-router-dom';
import { StyledPostItem } from './PostStyles';

export default function PostItem(props) {
    return (
        <Link to={`/posts/${props.postId}`}>
            <StyledPostItem key={props.index}>
                <h3>{props.postItem.title}</h3>
                <p>Author: {!props.postItem.author?.firstName ? "Unknown" : props.postItem.author.firstName}</p>
                <p>Category: {props.postItem.category}</p>
                <p>Views: {!props.postItem.viewCount ? "Don't know" : props.postItem.viewCount}</p>
                {props.postItem.isPinned === true ? <p>Pinned!</p> : <p></p>}
            </StyledPostItem>
        </Link> 
    )
}
