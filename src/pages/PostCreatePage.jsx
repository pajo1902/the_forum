import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PostForm from '../components/Post/PostForm';
import ForumKit from '../data/ForumKit';
import { PostsContext } from '../contexts/PostsContext';
import { StyledCenterContainer } from '../components/SharedStyles/SharedStyles';

export default function PostCreatePage() {
    const { allPostsData, setAllPostsData } = useContext(PostsContext);
    const [ postStatus, setPostStatus ] = useState('');
    const forumKit = new ForumKit();
    const history = useHistory();

    const [ formData, setFormData ] = useState({
        title: "",
        content: "",
        category: "",
    });

    function checkPostData() {
        if (!allPostsData) {
            forumKit.fetchAll()
            .then(res => res.json())
            .then(data => {
                setAllPostsData(data.results.reverse());
            });
        }
    }

    useEffect(() => {
        checkPostData();
    }, []);

    function getAllPosts() {
        forumKit.fetchAll()
        .then(res => res.json())
        .then(data => {
            setAllPostsData(data.results.reverse());
        })
    }

    function handleCreatePost() {
        const payload = formData;

        forumKit.createPost(payload)
        .then(res => {
            if (res.status === 400) {
                setPostStatus("Couldn't create");
            } else {
                const allPostsCopy = [...allPostsData];
                allPostsCopy.unshift(res.json());
                setAllPostsData(allPostsCopy);
                // getAllPosts();
                history.push('/posts');
            }
        });
    }
    
    function handleInputOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    return (
        <StyledCenterContainer>
            <h1>Post Create Page</h1>
            <PostForm
                onChange={handleInputOnChange}
                setTitle={formData["title"]}
                setContent={formData["content"]}
                setCategory={formData["category"]}
                handleCreatePost={handleCreatePost}
                postStatus={postStatus}
            />
        </StyledCenterContainer>
    )
}
