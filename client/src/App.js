import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Profile from './pages/Profile';
import Header from './components/Header';
import Error from './pages/Error';
import Register from './pages/Register';
import Mainp from './pages/Mainp';
import Login from './pages/Login'
import Post from './pages/Post'
import CurrentPostItem from './components/CurrentPostItem';
import PostItem from './components/PostItem';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Mainp/>}/> 
        {/* <Route path='/post' element={<CurrentPostItem/>}/> */}
        <Route path='/post' element={<Post/>}/> 
        <Route path='/post/id/:id' element={<CurrentPostItem/>}/> 
        <Route path='/profile' element={<Profile/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/> 
      </Routes>
    </div>
  );
}

export default App;
