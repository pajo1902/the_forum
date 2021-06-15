import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { CountriesContext } from './contexts/CountriesContext';
import { PostsContext } from './contexts/PostsContext';
import { CategoriesContext } from './contexts/CategoriesContext';
import { AuthContext } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostCreatePage from './pages/PostCreatePage';
import PostDetailPage from './pages/PostDetailPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthKit from './data/AuthKit';
import { GlobalStyle } from './globalStyles/GlobalStyles';

function App() {
  const authKit = new AuthKit();
  const [allCountriesData, setAllCountriesData] = useState(null);
  const [allPostsData, setAllPostsData] = useState(null);
  const [allCategoriesData, setAllCategoriesData] = useState(null);
  const [auth, setAuth] = useState(authKit.isTokenValid());
  const [userData, setUserData] = useState(null);
  
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData }}>
        <AuthContext.Provider value={{ auth, setAuth }}>
          <PostsContext.Provider value={{ allPostsData, setAllPostsData }}>
            <CategoriesContext.Provider value={{ allCategoriesData, setAllCategoriesData }}>
              <CountriesContext.Provider value={{ allCountriesData, setAllCountriesData }}>
                <div className="container">
                  <Navbar/>

                  <Switch>
                    <PrivateRoute path='/' exact component={HomePage}/>
                    <Route path='/login' exact component={LoginPage}/>
                    <Route path='/register' exact component={RegisterPage}/>
                    <PrivateRoute path='/posts' exact component={PostListPage}/>
                    <PrivateRoute path='/posts/create' exact component={PostCreatePage}/>
                    <PrivateRoute path='/posts/:id' exact component={PostDetailPage}/>
                    <Route path="*" component={() => "This page doesnt exist!"}/>
                  </Switch>
                </div>
              </CountriesContext.Provider>
            </CategoriesContext.Provider>
          </PostsContext.Provider>
        </AuthContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
