import React, { useEffect, useContext } from 'react';
import PostItem from '../components/Post/PostItem';
import ForumKit from '../data/ForumKit';
import { PostsContext } from '../contexts/PostsContext';
import { StyledCenterContainer, StyledListContainer } from '../components/SharedStyles/SharedStyles';

export default function PostListPage() {
    const forumKit = new ForumKit();
    const { allPostsData, setAllPostsData } = useContext(PostsContext);

    function getAllPosts() {
        if(!allPostsData) {
            forumKit.fetchAll()
            .then(res => res.json())
            .then(data => {
                setAllPostsData(data.results);
            })
        }
    }

    useEffect(() => {
        setInterval(() => {
            getAllPosts()
        }, 3000);	
    }, [])

    return (
    <StyledCenterContainer>
            <h1>Post List Page</h1>
            <StyledListContainer>
            {allPostsData && allPostsData.map((postItem, index) => {
                return (
                    <PostItem
                        key={index}
                        index={index}
                        postItem={postItem}
                        postId={postItem.id}
                    />
                )
            })}
            </StyledListContainer>
        </StyledCenterContainer>
    )
}
