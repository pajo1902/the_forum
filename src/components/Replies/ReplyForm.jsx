import React from 'react'
import { StyledButton } from '../SharedStyles/SharedStyles'
import { StyledReplyForm } from './RepliesStyles'

export default function ReplyForm(props) {

    function handleOnClick() {
        props.handleCreateReply();
        props.getReplies();
    }

    return (
        <StyledReplyForm>
            <h3>Create a reply</h3>
            <ul className="flexOuter">
                <li>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={props.setTitle}
                        onChange={props.onChange}
                        placeholder="Enter a title"
                    />
                </li>
                <li>
                    <label htmlFor="content">Content</label>
                    <textarea
                        type="text"
                        name="content"
                        value={props.setContent}
                        onChange={props.onChange}
                        placeholder="Enter some content"
                    />
                </li>
                <li>
                    <StyledButton onClick={handleOnClick}>Reply</StyledButton>
                </li>
            </ul>
        </StyledReplyForm>
    )
}
