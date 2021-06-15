import React from 'react';
import { StyledReplyListContainer } from './RepliesStyles';
import ReplyItem from './ReplyItem';

export default function RepliesList(props) {

    return (
        <>
            <h2>List of replies</h2>
            <StyledReplyListContainer>
            {props.repliesData && props.repliesData.map((replyItem, index) => {
                return (
                    <ReplyItem 
                    key={index}
                    replyItem={replyItem}
                    />
                )
            })}
            </StyledReplyListContainer>
        </>
    )
}
