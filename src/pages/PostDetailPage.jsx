import React, { useContext, useState, useEffect } from 'react';
import PostDetail from '../components/Post/PostDetail';
import RepliesList from '../components/Replies/RepliesList';
import ReplyForm from '../components/Replies/ReplyForm';
import { PostsContext } from '../contexts/PostsContext';
import ForumKit from '../data/ForumKit';
import { StyledPostDetailContainer } from '../components/Post/PostStyles';

export default function PostDetailPage(props) {
    const { allPostsData } = useContext(PostsContext);
    const [ postDetailData, setPostDetailData ] = useState();
    const [ repliesData, setRepliesData ] = useState();

    const id = props.match.params.id;

    const forumKit = new ForumKit();

    const [ formData, setFormData ] = useState({
        title: "",
        content: "",
        parent: Number(id)
    });

    function getPostDetails() {
        if(!allPostsData) {
            forumKit.fetchOne(id)
            .then(res => res.json())
            .then(data => {
                setPostDetailData(data);
            });
        } else {
            const postItem = allPostsData.filter((post) => post.id == id);
            setPostDetailData(postItem[0]);
        }
        
    }

    function handleCreateReply() {
        const payload = formData;
        forumKit.createReply(payload)
        .then(res => res.json())
        .then(data => {
            const repliesDataCopy = [...repliesData];
            repliesDataCopy.unshift(data);
            setRepliesData(repliesDataCopy);
        });
    }

    function getReplies() {
        forumKit.fetchReplies(id)
        .then(res => res.json())
        .then(data => {
            setRepliesData(data.results.reverse());
        });
    }

    useEffect(() => {
        getPostDetails();
        getReplies();
        const interval = setInterval(() => {
            getReplies();
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    
    function handleInputOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    return (
        <div>
            {postDetailData &&
                <StyledPostDetailContainer>
                    <h1>Post Detail Page</h1>
                    <PostDetail postItem={postDetailData}/>
                    <ReplyForm
                    onChange={handleInputOnChange}
                    setTitle={formData["title"]}
                    setContent={formData["content"]}
                    handleCreateReply={handleCreateReply}
                    getReplies={getReplies}
                    />
                    <RepliesList 
                    postId={id}
                    repliesData={repliesData}
                    getReplies={getReplies}
                    />
                </StyledPostDetailContainer>
            }
        </div>
    )
}
