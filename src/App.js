import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Post from './Components/Post/Post';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:detailId' element ={<FriendDetails></FriendDetails>}></Route>
        <Route path='/posts' element={<Post></Post>}>
          <Route path=':PostsId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
