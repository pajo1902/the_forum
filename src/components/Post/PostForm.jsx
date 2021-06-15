import React, { useContext, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ForumKit from '../../data/ForumKit';
import { StyledButton, StyledForm } from '../SharedStyles/SharedStyles';

export default function PostForm(props) {
    const { allCategoriesData, setAllCategoriesData } = useContext(CategoriesContext);
    
    const forumKit = new ForumKit();

    function getAllCategories() {
        if(!allCategoriesData) {
            forumKit.fetchAllCategories()
            .then(res => res.json())
            .then(data => {
                setAllCategoriesData(data.results);
            })
        }
    }

    useEffect(() => {
		getAllCategories()
    }, [])
    
    return (
        <StyledForm>
            <ul className="flexOuter">
                <li>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={props.setTitle}
                        onChange={props.onChange}
                        placeholder="Enter the title"
                    />
                </li>
                <li>
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        name="content"
                        value={props.setContent}
                        onChange={props.onChange}
                        placeholder="Enter the content"
                    />
                </li>
                <li>
                    <label htmlFor="categories">Choose a category:</label>
                    <select onChange={props.onChange} name="category">
                        <option>Category</option>
                        {allCategoriesData && allCategoriesData.map((categoryItem, index) => {
                            return (
                                <option key={index} value={++index}>{categoryItem.title}</option>
                            )
                        })}
                    </select>
                </li>
                <li>
                    <StyledButton onClick={props.handleCreatePost}>Create</StyledButton>
                </li>
            </ul>
            <p>{props.postStatus && props.postStatus}</p>
        </StyledForm>
    )
}
