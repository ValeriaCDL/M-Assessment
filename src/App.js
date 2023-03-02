import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import { Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import ProfileList from './components/ProfileList';
import './App.css';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="/"> Home </Link> 
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<ProfileList/> }/>
      </Routes>
    </>
  );
}

export default App;
