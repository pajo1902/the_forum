import React from 'react'
import { StyledReplyItem } from './RepliesStyles'

export default function ReplyItem(props) {
    return (
        <StyledReplyItem>
            <h3>{props.replyItem.title}</h3>
            <p>Content: {props.replyItem.content}</p>
            <p>Author: {props.replyItem.author.firstName} {props.replyItem.author.lastName}</p>
        </StyledReplyItem>
    )
}
