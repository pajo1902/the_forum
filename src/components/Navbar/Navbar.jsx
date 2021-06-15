import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthKit from '../../data/AuthKit';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { PostsContext } from '../../contexts/PostsContext';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import UserInfo from '../UserInfo/UserInfo';
import { StyledNav } from './NavbarStyles';
import { StyledButton } from '../SharedStyles/SharedStyles';
import Image from './logo.png';

export default function Navbar() {
    const { allCategoriesData, setAllCategoriesData } = useContext(CategoriesContext);
    const { allPostsData, setAllPostsData } = useContext(PostsContext);
    const { auth, setAuth } = useContext(AuthContext);
    const { userData, setUserData } = useContext(UserContext);

    const authKit = new AuthKit();

    function checkUserData() {
        if(!userData && auth === true) {
            authKit.getUser()
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            });
        }
    }

    useEffect(() => {
        checkUserData()
    }, []);

    function handleLogOutUser() {
        authKit.logout();
        setAllCategoriesData(null);
        setAllPostsData(null);
        setUserData(null);
        setAuth(false);
    }
    
    return (
        <StyledNav>
            <ul>
            {auth == false ?
                <>
                    <div className="nav">
                        <li><Link to='/'><img src={Image}/></Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </div>
                    <div className="userInfo">
                        <UserInfo log={false}/>
                    </div>
                </> :
                <>
                    <div className="nav">
                        <li><Link to='/'><img src={Image}/></Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/posts'>Posts</Link></li>
                        <li><Link to='/posts/create'>Create</Link></li>
                    </div>
                    <div className="userInfo">
                        <UserInfo log={true}/>
                        <li><StyledButton onClick={handleLogOutUser}>Logout</StyledButton></li>
                    </div>
                </>
            }
            </ul>
        </StyledNav>
    )
}
