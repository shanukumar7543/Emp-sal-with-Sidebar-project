import { Nav } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Posts from "./employee/posts";
import Comments from "./employee/Comments";
import Albums from  "./employee/album";
import Todos from "./employee/todos";
import Photos from  "./employee/photos";
import Users from "./employee/users";
import Sidebar from "./employee/Sidebar";
function App() {
  return (
    <>
      <h1>This is main page</h1>
      <Nav variant="tabs">
    <Nav.Item>
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
   </Nav.Item>   
   <Nav.Item>
        <Nav.Link ><Link to="posts">Posts</Link></Nav.Link>
   </Nav.Item>
   <Nav.Item>
   <Nav.Link ><Link to="comments">Comments</Link></Nav.Link>
   </Nav.Item>
   <Nav.Item>
   <Nav.Link ><Link to="albums">Albums</Link></Nav.Link>
   </Nav.Item>
   <Nav.Item>
         <Nav.Link ><Link to="Todos">Todos</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
         <Nav.Link ><Link to="photos">Photos</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
         <Nav.Link ><Link to="users">Users</Link></Nav.Link>
    </Nav.Item>
    </Nav>
      
      <Routes>
        
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/users" element={<Users />} />
        
      </Routes>
    </>
  );
}

export default App;